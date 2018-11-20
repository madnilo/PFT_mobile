import React, { PureComponent } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import Colors from '../_constants/Colors'

export default class TextSubtext extends PureComponent {
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
        fontSize: 12,
        fontWeight: '400',
        color: Colors.text,
        marginTop: 5,
        marginBottom: 10,
    }
})
