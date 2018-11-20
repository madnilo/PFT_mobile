
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import AssesmentsScreen from '../assesments/AssesmentScreen'
import TipsScreen from '../tips/TipsScreen'
import MyScheduleScreen from '../schedules/MyScheduleScreen';
import NewScheduleScreen from '../schedules/NewScheduleScreen';
import MyWorkoutsScreen from '../workouts/MyWorkoutsScreen';
import EventsScreen from '../events/EventsScreen';
import ProfileScreen from '../profile/ProfileScreen';
import ArticleScreen from '../tips/ArticleScreen';

export default createStackNavigator({
    Home: HomeScreen,
    Tips: TipsScreen,
    Article: ArticleScreen,
    Assesments: AssesmentsScreen,
    MySchedule: MyScheduleScreen,
    NewSchedule: NewScheduleScreen,
    MyWorkouts: MyWorkoutsScreen,
    Events: EventsScreen,
    Profile: ProfileScreen,
},
    {
        navigationOptions: {
            header: null,
        }
    });
