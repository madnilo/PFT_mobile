import React, { PureComponent } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    Animated,
    Dimensions,
    Platform,
    TouchableHighlight
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../_constants/Colors'

const { width, height } = Dimensions.get('window')
const ios = Platform.OS === 'ios'

export default class Header extends PureComponent {
    state = {
        animatedOpacity: new Animated.Value(0),
        openedMenu: false,
    }

    toggleMenu = () => {
        const { animatedOpacity, openedMenu } = this.state
        this.setState({ openedMenu: !openedMenu })

        Animated.timing(animatedOpacity, {
            toValue: openedMenu ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start()
    }

    handleNav = (screenName) => {
        this.toggleMenu()
        this.props.nav(screenName)
    }

    render() {
        let { animatedOpacity, openedMenu } = this.state
        const { backFunction } = this.props

        return (
            <SafeAreaView style={[{ backgroundColor: Colors.black, width: '100%', height: height * .12, borderBottomColor: 'grey', borderBottomWidth: ios ? 1 : 0, elevation: 3 }, openedMenu ? { zIndex: 2 } : null]}>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                    <TouchableWithoutFeedback
                        style={{ flex: 1, backgroundColor: 'purple' }}
                        onPress={() => backFunction && backFunction()}>
                        <View style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 15 }}>
                            {
                                this.props.backFunction
                                &&
                                <Ionicons name='ios-arrow-back' size={32} color={Colors.orange} />
                            }
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={{ flex: 2.5, alignItems: 'center' }}>
                        <Image source={require('../../assets/images/marcanova.png')} style={{ width: 150 }} resizeMode='contain' />
                    </View>

                    <TouchableWithoutFeedback style={{ flex: 1, backgroundColor: 'red' }} onPress={() => this.toggleMenu()}>
                        <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: 15 }}>
                            {
                                openedMenu
                                    ?
                                    <Ionicons name='ios-close' size={42} color={Colors.orange} />
                                    :
                                    <Ionicons name='ios-menu' size={32} color={Colors.orange} />
                            }
                        </View>
                    </TouchableWithoutFeedback>

                </View>
                {
                    openedMenu
                    &&
                    <TouchableWithoutFeedback onPress={() => this.toggleMenu()}>
                        <Animated.View style={{
                            opacity: animatedOpacity,
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: width,
                            height: height,
                            backgroundColor: 'transparent'
                        }}>
                            <TouchableWithoutFeedback>
                                <View style={{ marginTop: height * .12, width: '100%', height: height * .3, zIndex: 1, elevation: 3, backgroundColor: Colors.orange }}>
                                    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', paddingVertical: 20 }}>
                                    <TouchableWithoutFeedback onPress={() => this.handleNav('Home')}>
                                        <Text style={{ fontWeight: '900', fontSize: 28, color: Colors.black }}>HOME</Text>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={() => this.handleNav('Profile')}>
                                        <Text style={{ fontWeight: '900', fontSize: 28, color: Colors.black }}>MINHA CONTA</Text>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={() => this.handleNav('Login')}>
                                        <Text style={{ fontWeight: '900', fontSize: 28, color: Colors.black }}>SAIR</Text>
                                    </TouchableWithoutFeedback>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Animated.View>
                    </TouchableWithoutFeedback>

                }



            </SafeAreaView>
        )
    }
}
