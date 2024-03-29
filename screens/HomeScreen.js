import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import {
    Header,
    TextBold,
    TextSubtext,
    TextLight,
    Container,
    Content,
    Spinner
} from './_shared_components'
import Colors from './_constants/Colors';
import { connect } from 'react-redux'
import generalOps from '../state/general/operations'

const dashboard = [
    { name1: 'Meus', name2: 'Horários', route: 'MySchedule' },
    { name1: 'Meu', name2: 'Treino', route: 'MyWorkouts' },
    { name1: 'Avaliação', name2: 'Física', route: 'Assesments' },
    { name1: 'Dicas de', name2: 'Saúde', route: 'Tips' },
    { name1: 'Eventos', name2: null, route: 'Events' },
    // { name1: 'Agendar', name2: 'Horário', route: 'NewSchedule' },
]

const { width, height } = Dimensions.get('window')

class HomeScreen extends React.Component {

    componentDidMount(){
        this.props.getUser()
    }

    render() {
        const { user } = this.props

        if (user.loading)
        return (
            <Container>
                <Header nav={this.props.navigation.navigate} />
                <Content>
                    <Spinner />
                </Content>
            </Container>
        )

        const usr = user.data.attributes
        return (
            <Container>

                <Header nav={this.props.navigation.navigate} home={true} />

                <Content>
                    <View>
                        {/* TODO obter dados do usuario e substituir o nome */}
                        <TextLight text='Olá' />
                        <TextBold text={usr.name.split(' ')[0]} />
                        <TextSubtext text='Como posso te ajudar?' />
                    </View>
                    <View style={{ flex: 1, }}>
                        {
                            dashboard.map((option, index, array) => {
                                if (index % 2 === 0)
                                    return (
                                        <View key={option.route} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <TouchableHighlight
                                                onPress={() => this.props.navigation.navigate(option.route)}
                                                underlayColor={Colors.orange}
                                                style={{ height: height * .22, width: width * .42, }}>
                                                <View style={{ flex: 1, marginVertical: height * .005, borderWidth: 1, borderColor: Colors.orange, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ fontSize: 18, fontWeight: '500' }}>{option.name1.toUpperCase()}</Text>
                                                    <Text style={{ fontSize: 18, fontWeight: '500' }}>{option.name2 && option.name2.toUpperCase()}</Text>
                                                </View>
                                            </TouchableHighlight>
                                            {
                                                index != 4 &&
                                                <TouchableHighlight
                                                    key={array[index + 1].route}
                                                    onPress={() => this.props.navigation.navigate(array[index + 1].route)}
                                                    underlayColor={Colors.orange}
                                                    style={{ height: height * .22, width: width * .42, }}>
                                                    <View style={{ flex: 1, marginVertical: height * .005, borderWidth: 1, borderColor: Colors.orange, alignItems: 'center', justifyContent: 'center' }}>
                                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{array[index + 1].name1.toUpperCase()}</Text>
                                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{array[index + 1].name2 && array[index + 1].name2.toUpperCase()}</Text>
                                                    </View>
                                                </TouchableHighlight>
                                            }
                                        </View>
                                    )
                            }

                            )
                        }
                        <View style={{ height: height * .25 }}></View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: () => dispatch(generalOps.getUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
