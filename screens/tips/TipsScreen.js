import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import generalOps from '../../state/general/operations'
import Colors from '../_constants/Colors'
import { Header, TextBold, TextSubtext, Spinner, Container, Content } from '../_shared_components'

class TipsScreen extends Component {

    componentDidMount() {
        this.props.getTips()
    }

    componentDidUpdate() {

    }

    render() {
        const { tips } = this.props

        if (tips.loading)
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
                        <TextBold text='Dicas de Saúde' />
                        <TextSubtext text='Dicas para complementar o cuidado com sua saúde' />

                        {
                            tips
                            &&
                            tips.data.map(item => (
                                <TouchableHighlight key={item.id} onPress={() => this.props.navigation.navigate('Article', { item })}
                                    style={{ marginVertical: 5, borderRadius: 5 }}
                                    underlayColor={Colors.orange}>
                                    <View style={{ borderWidth: 1, borderColor: Colors.orange, padding: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text numberOfLines={1} style={{ color: Colors.text, fontSize: 14, fontWeight: '700' }}>{item.attributes.title}</Text>
                                        <Ionicons name='ios-arrow-forward' size={20} color={Colors.text} />
                                    </View>
                                </TouchableHighlight>
                            ))
                        }

                    </Content>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});

function mapStateToProps(state) {
    return {
        tips: state.tips
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getTips: () => dispatch(generalOps.getTips())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TipsScreen)
