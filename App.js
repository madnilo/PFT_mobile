import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AuthNavigator from './screens/_navigation/AuthNavigator';
import Colors from './screens/_constants/Colors'
import { Provider } from 'react-redux'
import { Store } from './state/Store'
import NavigatorService from './state/_services/Navigator'

const ios = Platform.OS === 'ios'

export default class App extends React.Component {
    constructor() {
        super()

        global.BASE_IMAGES = 'https://powerfit.agenciaacerte.com'
    }

    state = {
        isLoadingComplete: false,
    };

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <Provider store={Store}>
                    <View style={styles.container}>
                        {ios
                            ?
                            <StatusBar barStyle="light-content" />
                            :
                            <StatusBar backgroundColor={Colors.statusBarAndroid} barStyle="light-content" />
                        }
                        <AuthNavigator
                            ref={navigatorRef => {
                                NavigatorService.setContainer(navigatorRef);
                            }} />
                    </View>
                </Provider>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./assets/images/robot-dev.png'),
                require('./assets/images/robot-prod.png'),
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Icon.Ionicons.font,
                ...Icon.MaterialCommunityIcons.font,
                // We include SpaceMono because we use it in HomeScreen.js. Feel free
                // to remove this if you are not using it in your app
            }),
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
