import React, { Component } from 'react'
import {
    Text,
    TextInput,
    View,
    SafeAreaView,
    Image,
    TouchableHighlight,
    Dimensions,
    KeyboardAvoidingView,
    ActivityIndicator,
} from 'react-native'
import Colors from '../_constants/Colors';
import auth from '../../state/auth/operations'
import { connect } from 'react-redux'
import Toast from '../_utils/Toast'

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

                            <TextInput
                                placeholder='E-MAIL'
                                placeholderTextColor={Colors.text}
                                style={{ borderColor: Colors.orange, borderWidth: 1, borderRadius: 10, height: 45, color: Colors.text, padding: 10 }}
                                value={email}
                                onChangeText={(email) => this.setState({ email })}>

                            </TextInput>

                            <TextInput
                                placeholder='SENHA'
                                secureTextEntry={true}
                                placeholderTextColor={Colors.text}
                                style={{ borderColor: Colors.orange, borderWidth: 1, borderRadius: 10, height: 45, color: Colors.text, padding: 10 }}
                                value={password}
                                onChangeText={(password) => this.setState({ password })}>

                            </TextInput>

                            <TouchableHighlight underlayColor={Colors.underlayOrange}
                                onPress={() => this.handleLogin()}
                                style={{ backgroundColor: Colors.orange, height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                {
                                    loginLoading
                                        ?
                                        <ActivityIndicator size='small' color={Colors.white} />
                                        :
                                        <Text style={{ marginLeft: 10, color: Colors.white, fontSize: 14 }}>ENTRAR</Text>
                                }
                            </TouchableHighlight>

                            <TouchableHighlight
                                activeOpacity={.8}
                                underlayColor='transparent'
                                onPress={() => console.log('press')}>
                                <Text style={{ color: Colors.text, fontSize: 14 }}>Esqueci minha senha.</Text>
                            </TouchableHighlight>

                        </KeyboardAvoidingView>
                    </View>

                </View>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.token,
        loginLoading: state.loginLoading,
        loginErrors: state.loginErrors,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (user, pwd) => dispatch(auth.login(user, pwd)),
        clearErrors: () => dispatch(auth.clearLoginErrorMessage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
