import React, { PureComponent } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import Colors from '../_constants/Colors'

export default class TextLight extends PureComponent {
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
        fontWeight: '300',
        color: Colors.black,
        marginTop: 10,
        marginBottom: -10
    }
})
