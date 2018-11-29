import React, { Component } from 'react'
import {
    StyleSheet,
    Platform,
} from 'react-native'
import { connect } from 'react-redux'
import {
    Container,
    Content,
    Header,
    TextBold,
    TextSubtext,
    PrimaryInput,
    PrimaryButton
} from '../_shared_components'
import generalOps from '../../state/general/operations'
import Toast from '../_utils/Toast'

const ios = Platform.OS === 'ios'

class ChangeProfileScreen extends Component {

    state={
        name: '',
        email: '',
        phone: '',
    }

    componentDidMount(){
        this.props.reset()
        const { user: { data: { attributes: { name, email, phone}}} } = this.props
        this.setState({ name, email, phone })
    }

    componentDidUpdate(){
        if(this.props.user.success) {
            this.props.reset()
            this.props.navigation.goBack()
        }
    }

    handleSubmit = () => {
        const { name, email, phone } = this.state
        const user = { name, email, phone }
        if( name && email && phone ){
            this.props.editUser(user)
        }
        else
        Toast.topToast('Dados inválidos')

    }

    render() {
        const { name, email, phone } = this.state

        return (
            <Container>
                <Header
                    nav={this.props.navigation.navigate}
                    backFunction={this.props.navigation.goBack} />
                <Content>

                    <TextBold text='Alterar Dados'/>
                    <TextSubtext text='Altere os dados desejados e confirme'/>

                    <PrimaryInput
                        placeholder='Nome'
                        value={name}
                        onChangeText={(name) => this.setState({ name })}
                    />

                    <PrimaryInput
                        placeholder='Email'
                        value={email}
                        onChangeText={(email) => this.setState({ email })}
                    />

                    <PrimaryInput
                        placeholder='Telefone'
                        value={phone}
                        onChangeText={(phone) => this.setState({ phone })}
                    />

                    <PrimaryButton
                        text='Confirmar'
                        onPress={() => this.handleSubmit()}
                    />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editUser: (user) => dispatch(generalOps.editUser(user, null, null)),
        reset: () => dispatch(generalOps.editUserReset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeProfileScreen)
