import React, { PureComponent } from 'react'
import {
    View,
    Modal,
    SafeAreaView,
    TouchableWithoutFeedback,
    Text,
    Dimensions,
    Platform,
} from 'react-native'
import { Header, Container, Content, TextBold, TextSubtext, Spinner, YoutubeVideo } from '../../_shared_components'

import Colors from '../../_constants/Colors';

const { width, height } = Dimensions.get('window')
const ios = Platform.OS === 'ios'

export default class ModalContent extends PureComponent {
    state = {
        isMounted: false
    }

    async componentDidMount() {
        // if(!ios) await this._sleep()
        this.setState({ isMounted: true })
    }

    _sleep = () => new Promise(resolve => setTimeout(resolve, 1000))

    render() {
        const { isMounted } = this.state

        return (
            <View style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={() => this.props.closeModal()}>
                    <View style={{ flex: 5 }}></View>
                </TouchableWithoutFeedback>
                <View style={{
                    flex: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.black, borderTopEndRadius: 15, borderTopStartRadius: 15,
                    shadowColor: Colors.text, shadowOpacity: .7, shadowOffset: { width: 0, height: -1 },  elevation: 3
                }}>
                    <TouchableWithoutFeedback onPress={() => this.props.closeModal()}>
                        <View style={{ height: height * .08, width: width, alignItems: 'flex-end', justifyContent: 'center', borderTopEndRadius: 15, borderTopStartRadius: 15, }}>
                            <Text style={{ color: Colors.background, fontSize: 18, fontWeight: '600', paddingHorizontal: 15 }}>Fechar</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{ height: height * .29, width: width * .9, borderColor: Colors.orange, borderWidth: 3, borderRadius: 5 }}>
                        {
                            isMounted
                            &&
                            <YoutubeVideo videoId={this.props.video} />
                        }
                    </View>
                    <View style={{ width: width * .9 }}>
                        <Text style={{ fontSize: 26, fontWeight: '700', color: Colors.orange, paddingTop: 5 }}>{this.props.title}</Text>

                    </View>
                </View>
            </View>
        )
    }
}
