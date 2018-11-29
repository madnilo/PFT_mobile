import React, { PureComponent } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native'
import Colors from '../../_constants/Colors'
import { Ionicons } from '@expo/vector-icons'

export default class CardTouchable extends PureComponent {
    render() {
        const { id, text, value, onPress } = this.props

        return (
            <View>
                <TouchableHighlight
                    underlayColor={Colors.orange}
                    onPress={() => onPress(id, text)}
                    style={ styles.cardContainer }>
                    <View style={ styles.card }>
                        <View>
                            <Text style={ styles.info }> {text} </Text>
                            <Text style={ styles.value }> {value} </Text>
                        </View>
                        <Ionicons name='ios-arrow-forward' color={Colors.text} size={18} />
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.orange,
        padding: 10,
        marginVertical: 5
    },
    card:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    info:{
        color: Colors.text,
        fontSize: 14,
        fontWeight: '800',
    },
    value:{
        color: Colors.text,
        fontSize: 14,
        fontWeight: '400',
    }
})
