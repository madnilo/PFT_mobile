import React, { PureComponent } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../_constants/Colors'

export default class Header extends PureComponent {

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: Colors.black, width: '100%', height: '12%', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
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

                    <TouchableWithoutFeedback style={{ flex: 1, backgroundColor: 'red' }}>
                        <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: 15 }}>
                            <Ionicons name='ios-menu' size={32} color={Colors.orange} />
                        </View>
                    </TouchableWithoutFeedback>

                </View>
            </SafeAreaView>
        )
    }
}
