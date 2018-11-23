import React, { Component } from 'react'
import {
    View,
    Modal,
    SafeAreaView,
    TouchableWithoutFeedback,
    Text,
    Platform,
    Dimensions,
} from 'react-native'
import { Header, Container, Content, TextBold, TextSubtext, Spinner, YoutubeVideo } from '../_shared_components'
import generalOps from '../../state/general/operations'
import { connect } from 'react-redux'
import { CardEvent } from './_components/CardEvent'
import ModalContent from './_components/ModalContent';

const ios = Platform.OS === 'ios'

class EventsScreen extends Component {

    state = {
        isModalOpen: false,
        video: '',
        title: '',
    }

    componentDidMount() {
        this.props.getEvents()
    }

    openModal = (video, title) => this.setState({ isModalOpen: true, video, title })

    closeModal = () => this.setState({ isModalOpen: false, video: '', title: '' })

    render() {
        const { events } = this.props
        const { isModalOpen, video, title } = this.state

        if (events.loading)
            return (
                <Container>
                    <Header
                        nav={this.props.navigation.navigate}
                        backFunction={this.props.navigation.goBack} />
                    <Spinner />
                </Container>
            )

        return (
            <Container>
                <Header
                    nav={this.props.navigation.navigate}
                    backFunction={this.props.navigation.goBack} />

                <Content>

                    <TextBold text='Eventos' />
                    <TextSubtext text='Veja os eventos que nós oferecemos!' />

                    {
                        events.data
                            .map(item => <CardEvent key={item.id} event={item.attributes} openVideo={this.openModal} />)
                    }

                </Content>

                <Modal
                    transparent={true}
                    hardwareAccelerated={true}
                    onRequestClose={() => this.closeModal()}
                    visible={isModalOpen}
                    animationType= {ios ? 'slide' : 'slide'}
                    style={{ backgroundColor: 'transparent'}}
                >
                    <ModalContent video={video} title={title} closeModal={this.closeModal} />
                </Modal>

            </Container>
        )
    }
}



function mapStateToProps(state) {
    return {
        events: state.events
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getEvents: () => dispatch(generalOps.getEvents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen)
