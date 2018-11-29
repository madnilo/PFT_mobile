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

class ChangePasswordScreen extends Component {

    state = {
        password: '',
        confirmation: '',
        loading: false,
    }

    componentDidMount() {
        this.props.reset()
    }

    componentDidUpdate() {
        if (this.props.user.success) {
            this.props.reset()
            this.props.navigation.goBack()
        }
    }

    handleSubmit = () => {
        const { password, confirmation } = this.state
        const { user } = this.props
        if (password === confirmation && password && confirmation) {
            this.props.editUser(password)
        }
        else
            Toast.topToast('As senhas não conferem')
    }

    render() {
        const { password, confirmation, loading } = this.state

        return (
            <Container>
                <Header
                    nav={this.props.navigation.navigate}
                    backFunction={this.props.navigation.goBack} />
                <Content>

                    <TextBold text='Alterar Senha' />
                    <TextSubtext text='Insira uma nova senha e confirme' />

                    <PrimaryInput
                        placeholder='Nova senha'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(password) => this.setState({ password })}
                    />

                    <PrimaryInput
                        placeholder='Repita a nova senha'
                        secureTextEntry={true}
                        value={confirmation}
                        onChangeText={(confirmation) => this.setState({ confirmation })}
                    />

                    <PrimaryButton
                        text='Confirmar'
                        // loading={ loading }
                        onPress={() => !loading && this.handleSubmit()}
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
        editUser: (pwd) => dispatch(generalOps.editUser(null, null, pwd)),
        reset: () => dispatch(generalOps.editUserReset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordScreen)
