import React, { PureComponent } from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    ActivityIndicator,
    StyleSheet,
} from 'react-native'
import Colors from '../../_constants/Colors'

export default class MainButton extends PureComponent {
    render() {
        return (
            <View>
                <TouchableHighlight underlayColor={Colors.underlayOrange}
                    style={styles.button}
                    {...this.props}>
                    {
                        this.props.loginLoading
                            ?
                            <ActivityIndicator size='small' color={Colors.white} />
                            :
                            <Text style={{ marginLeft: 10, color: Colors.white, fontSize: 14 }}>ENTRAR</Text>
                    }
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.orange,
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
