import React from 'react'
import {
    Text,
    StyleSheet,
} from 'react-native'
import Colors from '../_constants/Colors'

export default TextCardField = (props) => {
    const isField = props.type === 'field'
    const isValue = props.type === 'value'
    const isTitle = props.type === 'title'

    return (
        <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={isField && styles.field || isValue && styles.value || isTitle && styles.title}>

            { isField ? props.children.toUpperCase() : props.children }
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '900',
        color: Colors.text,
        marginVertical: 5,
    },
    field: {
        color: Colors.orange,
        fontSize: 14,
        fontWeight: '800',
        paddingTop: 3,
    },
    value: {
        color: Colors.text,
        fontSize: 14,
        fontWeight: '600',
        paddingBottom: 5,
    },
})
