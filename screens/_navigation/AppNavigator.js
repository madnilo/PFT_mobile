
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
import ChangePasswordScreen from '../profile/ChangePasswordScreen';
import ChangeProfileScreen from '../profile/ChangeProfileScreen';
import WorkoutDetailsScreen from '../workouts/WorkoutDetailsScreen';

export default createStackNavigator({
    Home: HomeScreen,
    Events: EventsScreen,
    Tips: TipsScreen,
    Article: ArticleScreen,
    Assesments: AssesmentsScreen,
    MySchedule: MyScheduleScreen,
    NewSchedule: NewScheduleScreen,
    MyWorkouts: MyWorkoutsScreen,
    WorkoutDetails: WorkoutDetailsScreen,
    Profile: ProfileScreen,
    ChangePwd: ChangePasswordScreen,
    ChangeProfile: ChangeProfileScreen,
},
    {
        headerMode: 'none',
    });
