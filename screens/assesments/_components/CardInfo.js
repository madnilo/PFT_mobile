import React, { PureComponent } from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import Colors from '../../_constants/Colors'

export default class CardInfo extends PureComponent {
    render() {
        const { text, value } = this.props
        return (
            <View>
                {
                    value.length < 10
                    ?
                    <View style={ styles.card }>
                        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={ styles.info }> {text} </Text>
                        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={ styles.value }> {value} </Text>
                    </View>
                    :
                    <View style={ styles.cardTextArea }>
                        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={ styles.info }> {text} </Text>
                        <Text style={ styles.valueTextArea }> {value} </Text>
                    </View>
                }
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
    cardTextArea:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.orange,
        padding: 10,
        flexDirection: 'column',
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
    },
    valueTextArea:{
        color: Colors.text,
        fontSize: 14,
        fontWeight: '400',
        width: '100%',
        padding: 3,
    }
})
