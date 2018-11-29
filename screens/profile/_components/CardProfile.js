import React, { PureComponent } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import { ButtonCard, TextCardField } from '../../_shared_components'
import Colors from '../../_constants/Colors'

export default class CardProfile extends PureComponent {
    render() {
        const { usr, changePwd, changeInfo } = this.props

        return (
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.cardTitle}>
                        <TextCardField type='title'>Dados Pessoais</TextCardField>
                    </View>
                    <View style={styles.CardInfo}>
                        <TextCardField type='value'><TextCardField type='field'>Nome: </TextCardField> {usr.name}</TextCardField>
                        <TextCardField type='value'><TextCardField type='field'>E-Mail: </TextCardField> {usr.email}</TextCardField>
                        <TextCardField type='value'><TextCardField type='field'>Telefone: </TextCardField> {usr.phone}</TextCardField>
                    </View>
                    <View style={styles.CardToolbar}>
                        <ButtonCard type='primary' onPress={changeInfo}>Alterar Dados</ButtonCard>
                        <ButtonCard onPress={changePwd}>Mudar Senha</ButtonCard>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {

    },
    cardTitle: {
        marginBottom: 10,
    },
    cardContent: {
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderColor: Colors.orange,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 15,
        alignSelf: 'center',
    },
    CardToolbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 10
    },
})
