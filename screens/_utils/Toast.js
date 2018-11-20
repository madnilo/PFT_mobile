import Toast from 'react-native-root-toast'
import Colors from '../_constants/Colors';

topToast = (msg) => showToast(msg, Toast.positions.TOP)

bottomToast = (msg) => showToast(msg, Toast.positions.BOTTOM)

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
