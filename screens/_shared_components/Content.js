import React, { PureComponent } from 'react'
import { View, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export default class Content extends PureComponent {
    render() {
        return (
            <View style={{ paddingHorizontal: width * .07, flex: 1, }}>
                { this.props.children }
            </View>
        )
    }
}
