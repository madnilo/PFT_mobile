
import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../auth/LoginScreen'
import AppNavigator from './AppNavigator'

export default createSwitchNavigator({
    Login: LoginScreen,
    Start: AppNavigator,
},
    {
        navigationOptions: {
            header: null,
        }
    });
