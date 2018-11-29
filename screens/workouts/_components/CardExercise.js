import React from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import Colors from '../../_constants/Colors'

export const CardExercise = (props) => {
    const { title, series, repetitions, load } = props
    // const video = props.event['youtube-video-id']

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.contentContainer}>
                <View style={styles.itemContainer}>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.itemTitle}>SÉRIES</Text>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.itemInfo}>{series}x</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.itemTitle}>REPETIÇÕES</Text>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.itemInfo}>{repetitions}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.itemTitle}>CARGA</Text>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.itemInfo}>{load}</Text>
                </View>
                {/* <TouchableWithoutFeedback onPress={() => video ? props.openVideo(video, title) : null}>
                    <View style={styles.videoButton}>
                        <MaterialCommunityIcons name='play-circle-outline' size={ios ? 36 : 36} color={video.length ? Colors.orange : Colors.text} />
                    </View>
                </TouchableWithoutFeedback> */}
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
        fontSize: 16,
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
