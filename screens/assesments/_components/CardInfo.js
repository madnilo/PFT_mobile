import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import Colors from '../../_constants/Colors'

export default class CardInfo extends Component {
    render() {
        return (
            <View>
                <View style={ styles.card }>
                    <Text style={ styles.info }> PA Repouso </Text>
                    <Text style={ styles.value }> 15mm </Text>
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
        fontWeight: '800'
    },
    value:{
        color: Colors.text,
        fontSize: 14,
        fontWeight: '400'
    }
})
