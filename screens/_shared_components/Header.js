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
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../_constants/Colors'

const { width, height } = Dimensions.get('window')
const ios = Platform.OS === 'ios'

export default class Header extends PureComponent {
    state = {
        menuAnim: new Animated.Value(0),
        openedMenu: false,
    }

    toggleMenu = () => {
        const { menuAnim, openedMenu } = this.state
        this.setState({ openedMenu: !openedMenu})

        Animated.timing(
            menuAnim,
            {
                toValue: openedMenu ? 0 : 1,
                duration: 100
            }
        ).start()
    }

    render() {
        const { menuAnim, openedMenu } = this.state

        return (
            <SafeAreaView style={{ backgroundColor: Colors.black, width: '100%', height: height*.12, borderBottomColor: 'grey', borderBottomWidth: ios ? 1 : 0 , elevation: 3}}>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                    <TouchableWithoutFeedback
                        style={{ flex: 1, backgroundColor: 'purple' }}
                        onPress={() => this.props.backFunction && this.props.backFunction()}>
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
                    <Animated.View style={{ backgroundColor: Colors.orange, top: height*.12, position: 'absolute', width: '100%', height: height*.3, zIndex: 1, elevation: 3 }}>
                        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', paddingVertical: 20 }}>
                            <Text style={{ fontWeight: '900', fontSize: 28, color: Colors.black }}>HOME</Text>
                            <Text style={{ fontWeight: '900', fontSize: 28, color: Colors.black }}>MINHA CONTA</Text>
                            <Text style={{ fontWeight: '900', fontSize: 28, color: Colors.black }}>SAIR</Text>
                        </View>
                    </Animated.View>
                }
            </SafeAreaView>
        )
    }
}
