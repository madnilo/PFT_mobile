import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import Header from '../_shared_components/Header'
import Colors from '../_constants/Colors'

export default class TipsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    nav={this.props.navigation.navigate}
                    backFunction={this.props.navigation.goBack} />
                <View styles={{ flex: 1 }}>
                <Text style={{ color: Colors.orange, fontSize: 32}}>Dicas de Saúde </Text>
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
