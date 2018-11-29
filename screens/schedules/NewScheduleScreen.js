import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import { Container, Content, Header, TextBold, TextSubtext } from '../_shared_components'
import Colors from '../_constants/Colors'

export default class NewScheduleScreen extends Component {
    render() {
        return (
            <Container>
                <Header
                    nav={this.props.navigation.navigate}
                    backFunction={this.props.navigation.goBack} />
                <Content>
                    <TextBold text='Agendar Horário'/>
                    <TextSubtext text='Selecione a data e horário do seu treino'/>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

});
