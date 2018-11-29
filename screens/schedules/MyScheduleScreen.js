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
    Bumper,
} from '../_shared_components'
import Colors from '../_constants/Colors'
import { connect } from 'react-redux'
import generalOps from '../../state/general/operations'
import CardSchedule from './_components/CardSchedule'

class MyScheduleScreen extends Component {

    componentDidMount() {
        this.props.getSchedules()
    }

    handleRemove = (id) => this.props.deleteSchedule(id)

    handleAdd = () => this.props.navigation.navigate('NewSchedule')

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
                                            id={item.id}
                                            text={item.attributes.date}
                                            value={`${item.attributes['day-of-week']} | ${item.attributes.hour}`}
                                            onPress={this.handleRemove} />
                                )

                            }
                            <Bumper />
                        </SafeAreaView>
                    </Content>
                </ScrollView>
                <SafeAreaView style={styles.fixedButtonContainer}>
                    <PrimaryButton
                        text='Agendar Horário'
                        onPress={() => this.handleAdd()}
                    />
                </SafeAreaView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    fixedButtonContainer: {
        shadowColor: Colors.black,
        shadowOpacity: .5,
        shadowOffset: { width: 0, height: -1 },
        width: '86%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 5,
    },
});

function mapStateToProps(state) {
    return {
        schedules: state.schedules
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSchedules: () => dispatch(generalOps.getSchedules()),
        deleteSchedule: (id) => dispatch(generalOps.deleteSchedule(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyScheduleScreen)
