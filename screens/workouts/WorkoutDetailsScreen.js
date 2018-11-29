import React, { Component } from 'react'
import {
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
} from '../_shared_components'
import { connect } from 'react-redux'
import generalOps from '../../state/general/operations'
import { CardExercise } from './_components/CardExercise'

class WorkoutDetailsScreen extends Component {

    componentDidMount() {
        this.props.getWorkoutDetails(this.props.navigation.getParam('id', {}))
    }

    render() {
        const { workout } = this.props
        const dayOfWeek = this.props.navigation.getParam('dayOfWeek', {})

        if (workout.loading)
            return (
                <Container>
                    <Header
                        nav={this.props.navigation.navigate}
                        backFunction={this.props.navigation.goBack} />
                    <Spinner />
                </Container>
            )

        console.log(workout.data)
        return (
            <Container>
                <Header
                    nav={this.props.navigation.navigate}
                    backFunction={this.props.navigation.goBack} />

                <ScrollView>
                    <Content>
                        <SafeAreaView>
                            <TextBold text={dayOfWeek} />
                            <TextSubtext text='Explore sua lista de exercícios' />

                            {
                                workout.data.map(
                                    item =>
                                    <CardExercise
                                        key={item.id}
                                        title={item.attributes.training}
                                        series={item.attributes.series}
                                        repetitions={item.attributes.repetitions}
                                        load={item.attributes.weight}/>
                                )
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
        workout: state.workoutDetails
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getWorkoutDetails: (id) => dispatch(generalOps.getWorkoutDetails(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDetailsScreen)
