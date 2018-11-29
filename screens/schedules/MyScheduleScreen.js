import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native'
import {
    Container,
    Content,
    Header,
    TextBold,
    TextSubtext,
    Spinner,
    PrimaryButton,
} from '../_shared_components'
import Colors from '../_constants/Colors'
import { connect } from 'react-redux'
import generalOps from '../../state/general/operations'
import CardSchedule from './_components/CardSchedule'

class MyScheduleScreen extends Component {

    componentDidMount() {
        this.props.getSchedules()
    }

    handleSelect = () => alert('em construção')

    handleAdd = () => alert('em construção')

    render() {
        const { schedules } = this.props

        if (schedules.loading)
            return (
                <Container>
                    <Header
                        nav={this.props.navigation.navigate}
                        backFunction={this.props.navigation.goBack} />
                    <Spinner />
                </Container>
            )

        console.log(schedules.data)
        return (
            <Container>
                <Header
                    nav={this.props.navigation.navigate}
                    backFunction={this.props.navigation.goBack} />

                <ScrollView>
                    <Content>
                        <SafeAreaView>
                            <TextBold text='Meus Horários' />
                            <TextSubtext text='Cancele ou adicione novos horários de treino' />

                            {
                                schedules.data.map(
                                    item =>
                                        <CardSchedule
                                            key={item.id}
                                            text={item.attributes.date}
                                            value={`${item.attributes['day-of-week']} | ${item.attributes.hour}`}
                                            onPress={this.handleSelect} />
                                )

                            }
                            <PrimaryButton
                                text='Adicionar'
                                onPress={() => this.handleAdd()}
                            />
                        </SafeAreaView>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
    return {
        schedules: state.schedules
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSchedules: () => dispatch(generalOps.getSchedules())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyScheduleScreen)
