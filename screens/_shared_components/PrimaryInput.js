import React, { PureComponent } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
} from 'react-native'
import Colors from '../_constants/Colors'

export default class PrimaryInput extends PureComponent {
    render() {
        return (
            <View>
                <TextInput
                    style={ styles.input }
                    placeholderTextColor={Colors.text}
                    {...this.props} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        borderColor: Colors.orange,
        borderWidth: 1,
        borderRadius: 10,
        height: 45,
        color: Colors.text,
        padding: 10,
        marginVertical: 5
    }
})
