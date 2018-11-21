import React, { PureComponent } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    Platform,
} from 'react-native'
import Colors from '../_constants/Colors';
import { Container, Content, YoutubeVideo } from '../_shared_components';
import FloatingBackButton from './_components/FloatingBackButton';

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
                                style={{ width: '100%', height: '100%', resizeMode: 'cover'}} />
                        </View>
                    }

                    <Content>
                        <Text style={{ marginTop: 20, marginBottom: 10, color: Colors.black, fontSize: 32, fontWeight: '600' }}>{title}</Text>
                        {
                            video
                            &&
                            <View style={{ width: '100%', height: height * .28 }}>
                                <YoutubeVideo videoId={video}/>
                            </View>
                        }
                        <Text selectable={true} style={{ marginVertical: 15, color: Colors.text, fontSize: 16, textAlign: 'justify' }}>{text}</Text>
                    </Content>
                </ScrollView>

                {
                    ios &&
                    <FloatingBackButton goBack={this.props.navigation.goBack} />

                }

            </Container>
        )
    }
}

const styles = StyleSheet.create({

});
