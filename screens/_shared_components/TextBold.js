import React, { PureComponent } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import Colors from '../_constants/Colors'

export default class TextBold extends PureComponent {
    render() {
        return (
            <View>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.black,
        marginTop: 10
    }
})
