import React, { PureComponent } from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
} from 'react-native'
import Colors from '../../_constants/Colors'

export default class SecondaryButton extends PureComponent {
    render() {
        return (
            <View>
                <TouchableHighlight
                    activeOpacity={.8}
                    underlayColor='transparent'
                    {...this.props}>
                    <Text style={styles.buttonText}>
                        { this.props.text }
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonText: {
        color: Colors.text,
        fontSize: 14
    }
})
