
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import AssesmentsScreen from '../assesments/AssesmentScreen'
import TipsScreen from '../tips/TipsScreen'
import MyScheduleScreen from '../schedules/MyScheduleScreen';
import NewScheduleScreen from '../schedules/NewScheduleScreen';
import MyWorkoutsScreen from '../workouts/MyWorkoutsScreen';
import EventsScreen from '../events/EventsScreen';

export default createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Home: HomeScreen,
    Assesments: AssesmentsScreen,
    Tips: TipsScreen,
    MySchedule: MyScheduleScreen,
    NewSchedule: NewScheduleScreen,
    MyWorkouts: MyWorkoutsScreen,
    Events: EventsScreen,

},
    {
        navigationOptions: {
            header: null,
        }
    });
