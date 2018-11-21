import React from 'react'
import { TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../_constants/Colors'

export default FloatingBackButton = (props) =>
    (
        <TouchableWithoutFeedback
            style={{ backgroundColor: 'white' }}
            onPress={() => props.goBack()}>
            <SafeAreaView style={{ position: 'absolute', top: 0, left: 0, alignItems: 'center', marginHorizontal: 15 }}>
                <Ionicons name='ios-arrow-back' size={40} color={Colors.background} style={{ shadowColor: Colors.black, shadowOffset: { width: 0, height: 1 }, shadowOpacity: .9 }} />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
