import React, { Component } from 'react'
import {
    View,
    SafeAreaView,
    Image,
    Dimensions,
    KeyboardAvoidingView,
} from 'react-native'
import authOps from '../../state/auth/operations'
import { connect } from 'react-redux'
import Toast from '../_utils/Toast'
import StyledInput from './_components/StyledInput';
import MainButton from './_components/MainButton';
import SecondaryButton from './_components/SecondaryButton';

const { width, height } = Dimensions.get('window')

class LoginScreen extends Component {

    state = {
        email: 'teste@teste.com',
        password: '11111111',
    }

    componentDidMount() {
        this.checkAuthorization()
    }

    componentDidUpdate() {
        this.checkAuthorization()
        this.checkForErrors()
    }

    checkAuthorization = () => {
        const { token, navigation: { navigate } } = this.props
        if (token) return navigate('Home')
    }

    checkForErrors = () => {
        const { loginErrors, clearErrors } = this.props
        if(loginErrors) {
            Toast.topToast(loginErrors.errors)
            clearErrors()
        }
    }

    handleLogin = () => {
        const { email, password } = this.state
        this.props.login(email, password)
    }

    render() {
        const { email, password } = this.state
        const { loginLoading } = this.props

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Image
                    style={{ position: 'absolute', height: height, width: width, resizeMode: 'cover' }}
                    source={require('../../assets/images/bg_login.jpg')} />

                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>

                    <View style={{ width: '70%', height: '20%', alignSelf: 'center', marginTop: '5%' }}>
                        <Image
                            style={{ width: null, height: null, flex: 1, resizeMode: 'contain' }}
                            source={require('../../assets/images/marcanova.png')} />

                    </View>

                    <View style={{ width: '100%', alignItems: 'center' }}>

                        <KeyboardAvoidingView style={{ width: width * .65, height: height * .28, alignItems: 'stretch', justifyContent: 'space-around' }}>

                            <StyledInput
                                placeholder='E-MAIL'
                                value={email}
                                onChangeText={(email) => this.setState({ email })} />

                            <StyledInput
                                placeholder='SENHA'
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(password) => this.setState({ password })} />

                            <MainButton
                                loginLoading={ loginLoading }
                                onPress={() => !loginLoading && this.handleLogin()} />

                            <SecondaryButton
                                text= 'Esqueci minha senha.'
                                onPress={() => console.log('press')} />

                        </KeyboardAvoidingView>
                    </View>

                </View>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    const { token, loginLoading, loginErrors } = state.auth
    return {
        token,
        loginLoading,
        loginErrors,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (user, pwd) => dispatch(authOps.login(user, pwd)),
        clearErrors: () => dispatch(authOps.clearLoginErrorMessage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
