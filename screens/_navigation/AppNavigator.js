
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';

export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: HomeScreen,
},
{
  navigationOptions:{
    header: null,
  }
});