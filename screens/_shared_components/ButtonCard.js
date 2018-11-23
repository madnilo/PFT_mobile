import React from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
} from 'react-native'
import Colors from '../_constants/Colors';

export default ButtonCard = (props) => {
    const isPrimary = props.type === 'primary'

    return (
        <TouchableHighlight
            style={styles.buttonContainer}
            underlayColor={isPrimary ? Colors.underlayOrange : Colors.orange}
            onPress={() => props.onPress()}>
            <View style={[styles.button, isPrimary ? styles.primary : styles.other]}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 10,
    },
    button: {
        minWidth: '45%',
        height: 35,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        backgroundColor: Colors.orange
    },
    other: {
        backgroundColor: Colors.text,
    },
    buttonText: {
        color: Colors.white,
        fontSize: 14,
    }
})
