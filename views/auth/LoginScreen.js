import React, { Component } from 'react'
import {
    Text,
    TextInput,
    View,
    SafeAreaView,
    Image,
    TouchableHighlight,
    Button,
    Dimensions,
    KeyboardAvoidingView,
} from 'react-native'
import Colors from '../_constants/Colors';
import auth from '../../state/auth/actions'

const { width, height } = Dimensions.get('window')

export default class LoginScreen extends Component {

    componentWillMount(){
        console.log('operation login')
        auth.login('teste@teste.com', '11111111');
    }

    render() {
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

                        <KeyboardAvoidingView style={{ width: width*.65, height: height*.28, alignItems: 'stretch', justifyContent: 'space-around' }}>

                            <TextInput
                                placeholder='LOGIN'
                                placeholderTextColor={ Colors.text }
                                style={{ borderColor: Colors.orange, borderWidth: 1, borderRadius: 10, height: 45, color: Colors.text, padding: 10 }}>

                            </TextInput>

                            <TextInput
                                placeholder='SENHA'
                                secureTextEntry={true}
                                placeholderTextColor={ Colors.text }
                                style={{ borderColor: Colors.orange, borderWidth: 1, borderRadius: 10, height: 45, color: Colors.text, padding: 10 }}>

                            </TextInput>

                            <TouchableHighlight underlayColor={Colors.underlayOrange}
                                onPress={() => this.props.navigation.navigate('Home')}
                                style={{ backgroundColor: Colors.orange, height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: Colors.white, fontSize: 14 }}>ENTRAR</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                activeOpacity={.8}
                                underlayColor='transparent'
                                onPress={() => console.log('press')}>
                                <Text style={{ color: Colors.text, fontSize: 14 }}>Esqueci minha senha</Text>
                            </TouchableHighlight>

                        </KeyboardAvoidingView>
                    </View>

                </View>
            </SafeAreaView>
        )
    }
}
