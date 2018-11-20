
import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../auth/LoginScreen'
import AppNavigator from './AppNavigator'

export default createSwitchNavigator({
    Start: AppNavigator,
    Login: LoginScreen,
},
    {
        navigationOptions: {
            header: null,
        }
    });
