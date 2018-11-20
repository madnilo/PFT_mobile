import React, { PureComponent } from 'react'
import { View } from 'react-native'
import Colors from '../_constants/Colors'

export default class Container extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.background, }}>
                {this.props.children}
            </View>
        )
    }
}
