import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native'
import Header from '../_shared_components/Header'
import Colors from '../_constants/Colors'
import TextBold from '../_shared_components/TextBold';
import TextSubtext from '../_shared_components/TextSubtext';
import CardInfo from './_components/CardInfo';
import { connect } from 'react-redux'
import generalOps from '../../state/general/operations'

const { width, height } = Dimensions.get('window')

class AssesmentScreen extends Component {
    componentDidMount() {
        this.props.getAssesment()
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    nav={this.props.navigation.navigate}
                    backFunction={this.props.navigation.goBack} />

                <View style={{ paddingHorizontal: width * .07, flex: 1, }}>
                    <TextBold text='Avaliação Física' />
                    <TextSubtext text='Veja aqui a sua avaliação física.' />

                    <CardInfo />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    }
});


function mapStateToProps(state) {
    console.log(state)
    return {
        //TODO fix it
        assesment: state.general,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAssesment: () => dispatch(generalOps.getAssesment())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssesmentScreen)
