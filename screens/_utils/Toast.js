import { Toast } from 'native-base'
import Colors from '../_constants/Colors';

topToast = (msg) => showToast(msg, 'top')

bottomToast = (msg) => showToast(msg, 'bottom')

showToast = (msg, position) => {
    Toast.show({
        text: msg instanceof Array && msg.length > 1
                ? msg.map(str => `${str}\n`)
                : msg instanceof Array && msg.length == 1
                    ? msg[0]
                    : msg,
        buttonText: "OK",
        position: position,
        style: { backgroundColor: Colors.orange },
        duration: 2000,
    })
}

export default {
    topToast,
    bottomToast,
}
