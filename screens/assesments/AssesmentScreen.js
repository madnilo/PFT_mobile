import React, { Component } from 'react'
import {
    ScrollView,
    StyleSheet,
    Dimensions,
    SafeAreaView,
} from 'react-native'
import { Header, Container, Content, TextBold, TextSubtext, Spinner, TextLight } from '../_shared_components'
import CardInfo from './_components/CardInfo';
import { connect } from 'react-redux'
import generalOps from '../../state/general/operations'

const { width, height } = Dimensions.get('window')

class AssesmentScreen extends Component {
    componentDidMount() {
        this.props.getAssesment()
    }

    render() {
        const { assesment: { loading, data } } = this.props
        if (loading)
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
                            <TextBold text='Avaliação Física' />
                            <TextSubtext text='Veja aqui a sua avaliação física.' />

                            {
                                data
                                ?
                                Object.keys(data.attributes)
                                    .map(prop => <CardInfo key={prop} text={data.attributes[prop].name} value={data.attributes[prop].value} />)
                                :
                                <TextLight text='Nenhuma avaliação disponível.'/>
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
        assesment: state.assesment,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAssesment: () => dispatch(generalOps.getAssesment())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssesmentScreen)
