import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    Modal,
    Dimensions,
    Platform,
    TouchableHighlight
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { connect } from 'react-redux'
import Colors from '../_constants/Colors'
import auth from '../../state/auth/operations'

const { width, height } = Dimensions.get('window')
const ios = Platform.OS === 'ios'

class Header extends Component {
    state = {
        openedMenu: false,
    }

    toggleMenu = () => {
        const { openedMenu } = this.state
        this.setState({ openedMenu: !openedMenu })

    }

    handleNav = (screenName) => {
        this.toggleMenu()
        this.props.nav(screenName)
    }

    handleLogout = () => {
        this.toggleMenu()
        this.props.logout()
        this.props.nav('Login')
    }

    render() {
        let { openedMenu } = this.state
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

                <Modal
                    visible={openedMenu}
                    onRequestClose={() => this.toggleMenu()}
                    animationType='fade'
                    transparent={true}
                    style={{
                        width: width,
                        height: height,
                    }}>

                    <TouchableWithoutFeedback onPress={() => this.toggleMenu()}>
                        <View style={{ width: '100%', height: height * .12 }}></View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style={{ width: '100%', height: height * .3, zIndex: 1, elevation: 3, backgroundColor: Colors.orange }}>
                            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', paddingVertical: 20 }}>
                                <TouchableWithoutFeedback onPress={() => this.handleNav('Home')}>
                                    <Text style={{ fontWeight: '900', fontSize: 28, color: Colors.black }}>HOME</Text>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => this.handleNav('Profile')}>
                                    <Text style={{ fontWeight: '900', fontSize: 28, color: Colors.black }}>MINHA CONTA</Text>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => this.handleLogout()}>
                                    <Text style={{ fontWeight: '900', fontSize: 28, color: Colors.black }}>SAIR</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    {/* <TouchableWithoutFeedback onPress={() => this.toggleMenu()}>
                        <View style={{ width: '100%', height: height * .58 }}></View>
                    </TouchableWithoutFeedback> */}
                </Modal>

            </SafeAreaView>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(auth.logout())
    }
}

export default connect(null, mapDispatchToProps)(Header)
