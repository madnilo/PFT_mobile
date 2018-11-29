import React, { PureComponent } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native'
import Colors from '../../_constants/Colors'
import { Ionicons } from '@expo/vector-icons'

export default class CardSchedule extends PureComponent {
    render() {
        return (
            <View>
                <View style={styles.card}>
                    <View style={styles.textContainer}>
                        <Text style={styles.info}> {this.props.text} </Text>
                        <Text style={styles.value}> {this.props.value} </Text>
                    </View>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.onPress()}>
                        <Ionicons name='md-close-circle' color={Colors.orange} size={18} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.orange,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row'
    },
    info: {
        color: Colors.text,
        fontSize: 14,
        fontWeight: '800',
    },
    value: {
        color: Colors.text,
        fontSize: 14,
        fontWeight: '400',
    }
})
