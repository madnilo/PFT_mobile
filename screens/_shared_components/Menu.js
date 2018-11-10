import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import Colors from '../_constants/Colors'

export default class Menu extends Component {
    render() {
        return (
            <View style={{ backgroundColor: Colors.orange, top: '12%', position: 'absolute', width: '100%', height: '30%', zIndex: 99, }}>
                <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', paddingVertical: 20 }}>
                    <Text style={{ fontWeight: '900', fontSize: 28, color: Colors.black }}>HOME</Text>
                    <Text style={{ fontWeight: '900', fontSize: 28, color: Colors.black }}>MINHA CONTA</Text>
                    <Text style={{ fontWeight: '900', fontSize: 28, color: Colors.black }}>SAIR</Text>
                </View>
            </View>
        )
    }
}
