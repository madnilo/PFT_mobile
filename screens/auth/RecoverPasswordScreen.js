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

class RecoverPasswordScreen extends Component {

    state = {
        email: '',
    }

    componentDidMount(){
        this.props.reset()
    }

    componentDidUpdate() {
        const { success, navigation } = this.props
        if (success) {
            navigation.goBack()
            Toast.topToast('Verifique seu e-mail para recuperar sua senha.')
        }
    }

    handleSubmit = () => {
        const { email } = this.state
        if (email) {
            this.props.recoverPassword(email)
        }
        else
            Toast.topToast('Deve ser informado um email válido')
    }

    render() {
        const { email } = this.state
        const { loading } = this.props

        return (
            <Container>
                <Header
                    nav={this.props.navigation.navigate}
                    backFunction={this.props.navigation.goBack} />
                <Content>

                    <TextBold text='Recuperar senha' />
                    <TextSubtext text='Informe seu email e enviaremos uma recuperação de senha' />

                    <PrimaryInput
                        placeholder='Email'
                        autoCapitalize='none'
                        value={email}
                        onChangeText={(email) => this.setState({ email })}
                    />

                    <PrimaryButton
                        text='Recuperar'
                        loading={ loading }
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
        loading: state.recoverPassword.loading,
        success: state.recoverPassword.success
    }
}

function mapDispatchToProps(dispatch) {
    return {
        recoverPassword: (email) => dispatch(generalOps.recoverPassword(email)),
        reset: () => dispatch(generalOps.recoverPasswordReset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPasswordScreen)
