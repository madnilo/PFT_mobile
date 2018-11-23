import React from 'react'
import { WebView } from 'react-native'

export default YoutubeVideo = (props) =>
    (
        <WebView
            allowsInlineMediaPlayback={true}
            style={{ flex: 1 }}
            javaScriptEnabled={true}
            style={{ backgroundColor: 'transparent' }}
            source={{
                uri: `https://www.youtube.com/embed/${props.videoId}?rel=0&autoplay=0&showinfo=0&controls=0&playsinline=1`,
            }}
            {...props}
        />
    )


