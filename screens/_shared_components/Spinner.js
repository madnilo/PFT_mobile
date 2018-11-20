import React, { PureComponent } from 'react'
import {
    ActivityIndicator,
    View,
    StyleSheet,
} from 'react-native'
import Colors from '../_constants/Colors'

export default class Spinner extends PureComponent {
    render() {
        return (

            <View style={styles.loading}>
                <ActivityIndicator color={Colors.orange} size='large' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
    }
});
