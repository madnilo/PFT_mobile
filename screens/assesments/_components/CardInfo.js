import React, { PureComponent } from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import Colors from '../../_constants/Colors'

export default class CardInfo extends PureComponent {
    render() {
        return (
            <View>
                <View style={ styles.card }>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={ styles.info }> {this.props.text} </Text>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={ styles.value }> {this.props.value} </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.orange,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    info:{
        color: Colors.text,
        fontSize: 14,
        fontWeight: '800',
        width: '80%'
    },
    value:{
        color: Colors.text,
        fontSize: 14,
        fontWeight: '400',
        width: '20%',
        textAlign: 'right'
    }
})
