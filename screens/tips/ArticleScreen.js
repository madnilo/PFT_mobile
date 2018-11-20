import React, { PureComponent } from 'react'
import {
    View,
    Text,
    Image,
    WebView,
    StyleSheet,
    Dimensions,
    ScrollView,
    SafeAreaView,
    TouchableWithoutFeedback,
    Platform,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../_constants/Colors';
import { Container, Content } from '../_shared_components';

const { width, height } = Dimensions.get('window')
const ios = Platform.OS === 'ios'

export default class ArticleScreen extends PureComponent {
    item = this.props.navigation.getParam('item')

    render() {
        const { title, text, filename: { url } } = this.item.attributes
        const video = this.item.attributes['youtube-video-id']

        return (
            <Container>

                <ScrollView>
                    {
                        url
                        &&
                        <View style={{ width: '100%', height: height * .4 }} >
                            <Image source={{ uri: `${global.BASE_IMAGES}${url}` }}
                                style={{ width: '100%', height: '100%', resizeMode: 'cover', zIndex: -1 }} />
                        </View>
                    }

                    <Content>
                        <Text style={{ marginTop: 20, marginBottom: 10, color: Colors.black, fontSize: 32, fontWeight: '600' }}>{title}</Text>
                        {
                            video
                            &&
                            <View style={{ width: '100%', height: height * .28 }}>
                                <WebView
                                    allowsInlineMediaPlayback={true}
                                    style={{ flex: 1 }}
                                    javaScriptEnabled={true}
                                    source={{
                                        uri: `https://www.youtube.com/embed/${video}?rel=0&autoplay=1&showinfo=0&controls=1&playsinline=1`,
                                    }}
                                />
                            </View>
                        }
                        <Text selectable={true} style={{ marginVertical: 15, color: Colors.text, fontSize: 16, textAlign: 'justify' }}>{text}</Text>
                    </Content>
                </ScrollView>

                {
                    ios &&
                    <TouchableWithoutFeedback
                        style={{ backgroundColor: 'white', zIndex: 10 }}
                        onPress={() => this.props.navigation.goBack()}>
                        <SafeAreaView style={{ position: 'absolute', top: 0, left: 0, alignItems: 'center', marginHorizontal: 15 }}>
                            <Ionicons name='ios-arrow-back' size={40} color={Colors.background} style={{ shadowColor: Colors.black, shadowOffset: { width: 0, height: 1 }, shadowOpacity: .9 }} />
                        </SafeAreaView>
                    </TouchableWithoutFeedback>

                }

            </Container>
        )
    }
}

const styles = StyleSheet.create({

});
