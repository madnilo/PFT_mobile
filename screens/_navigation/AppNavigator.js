
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import AssesmentsScreen from '../assesments/AssesmentScreen'
import TipsScreen from '../tips/TipsScreen'
import MyScheduleScreen from '../schedules/MyScheduleScreen';
import NewScheduleScreen from '../schedules/NewScheduleScreen';
import MyWorkoutsScreen from '../workouts/MyWorkoutsScreen';
import EventsScreen from '../events/EventsScreen';

export default createStackNavigator({
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
