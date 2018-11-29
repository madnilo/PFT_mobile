
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../auth/LoginScreen'
import AppNavigator from './AppNavigator'
import RecoverPasswordScreen from '../auth/RecoverPasswordScreen';

const loginStack = createStackNavigator({
    Login: LoginScreen,
    RecoverPassword: RecoverPasswordScreen,
},
{
    headerMode: 'none'
}
)

export default createSwitchNavigator({
    Login: loginStack,
    Start: AppNavigator,
},
    {
        navigationOptions: {
            header: null,
        }
    });
