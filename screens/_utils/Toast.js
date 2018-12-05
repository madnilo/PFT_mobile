import Toast from 'react-native-root-toast'
import Colors from '../_constants/Colors';
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

topToast = (msg) => showToast(msg, height*.06)

bottomToast = (msg) => showToast(msg, height*.9)

showToast = (msg, position) => {
    Toast.show(msg, {
        duration: Toast.durations.LONG,
        position: position,
        shadow: false,
        animation: true,
        hideOnPress: true,
        delay: 0,
        opacity: 1,
        backgroundColor: Colors.orange,
    })
}

export default {
    topToast,
    bottomToast,
}
