import React from 'react'
import { WebView } from 'react-native'

export default YoutubeVideo = (props) =>
    (
        <WebView
            allowsInlineMediaPlayback={true}
            style={{ flex: 1 }}
            javaScriptEnabled={true}
            source={{
                uri: `https://www.youtube.com/embed/${props.videoId}?rel=0&autoplay=1&showinfo=0&controls=1&playsinline=1`,
            }}
            {...props}
        />
    )


