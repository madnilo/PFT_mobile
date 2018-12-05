import React from 'react'
import {
    TouchableHighlight,
    Image,
    StyleSheet,
} from 'react-native'
import Colors from '../../_constants/Colors'

export default Avatar = (props) => {
    return (
        <TouchableHighlight
            style={styles.avatarButton}
            underlayColor={Colors.orange}
            onPress={() => props.change()}
        >
        {
            props.hasAvatar
            ?
            <Image style={styles.avatar} source={{ uri: props.uri }}></Image>
            :
            <Image style={styles.avatar} source={require('../../../assets/images/512.png')}/>
        }
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    avatarButton: {
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 100,
        elevation: 3,
        shadowColor: Colors.black,
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: .6
    },
    avatar: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 100,
    },
})
