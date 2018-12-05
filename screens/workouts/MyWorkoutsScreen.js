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
    TextLight,
    Spinner,
} from '../_shared_components'
import Colors from '../_constants/Colors'
import { connect } from 'react-redux'
import generalOps from '../../state/general/operations'
import CardTouchable from './_components/CardTouchable'

class MyWorkoutsScreen extends Component {

    componentDidMount() {
        this.props.getWorkouts()
    }

    handleSelect = (id, dayOfWeek) =>
        this.props.navigation.navigate('WorkoutDetails', { id, dayOfWeek })

    render() {
        const { workouts } = this.props

        if (workouts.loading)
            return (
                <Container>
                    <Header
                        nav={this.props.navigation.navigate}
                        backFunction={this.props.navigation.goBack} />
                    <Spinner />
                </Container>
            )

        console.log(workouts.data)
        return (
            <Container>
                <Header
                    nav={this.props.navigation.navigate}
                    backFunction={this.props.navigation.goBack} />

                <ScrollView>
                    <Content>
                        <SafeAreaView>
                            <TextBold text='Meus Treinos' />
                            <TextSubtext text='Explore os seus treinos programados' />

                            {
                                workouts.data.length
                                ?
                                workouts.data.map(
                                    item =>
                                        <CardTouchable
                                            key={item.id}
                                            id={item.id}
                                            text={item.attributes['day-of-week']}
                                            value={item.attributes['training-type']}
                                            onPress={this.handleSelect} />
                                )
                                :
                                <TextLight text='Nenhum treino encontrado.'/>
                            }
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
        workouts: state.workouts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getWorkouts: () => dispatch(generalOps.getWorkouts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyWorkoutsScreen)
