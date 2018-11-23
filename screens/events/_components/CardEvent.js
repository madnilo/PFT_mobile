import React from 'react'
import {
    Text,
    View,
    TouchableWithoutFeedback,
    StyleSheet,
    Platform,
    Dimensions,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../../_constants/Colors'

const { width, height } = Dimensions.get('window')
const ios = Platform.OS === 'ios'

export const CardEvent = (props) => {
    const { date, price, title } = props.event
    const datetime = date.split(/ às /)
    const video = props.event['youtube-video-id']

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.contentContainer}>
                <View style={styles.itemContainer}>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.itemTitle}>DATA</Text>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.itemInfo}>{datetime[0]}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.itemTitle}>HORA</Text>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.itemInfo}>{datetime[1]}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.itemTitle}>VALOR</Text>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.itemInfo}>{price}</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => video ? props.openVideo(video, title) : null}>
                    <View style={styles.videoButton}>
                        {/* <View>
                        <Text style={styles.itemTitle}>ASSISTA</Text>
                        <Text style={styles.itemTitle}>O VÍDEO</Text>
                    </View> */}
                        <MaterialCommunityIcons name='play-circle-outline' size={ios ? 36 : 36} color={video.length ? Colors.orange : Colors.text} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: Colors.orange,
        marginVertical: 10,
        borderRadius: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: '900',
        color: Colors.text,
        marginVertical: 5,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemContainer: {

    },
    itemTitle: {
        color: Colors.orange,
        fontSize: 14,
        fontWeight: '800',
        paddingTop: 3,
    },
    itemInfo: {
        color: Colors.text,
        fontSize: 14,
        fontWeight: '600',
        paddingBottom: 5,
    },
    videoButton: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
