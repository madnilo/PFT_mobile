import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Platform,
} from 'react-native'
import { connect } from 'react-redux'
import { ImagePicker } from 'expo'
import { Container, Content, Header, Spinner } from '../_shared_components'
import generalOps from '../../state/general/operations'
import Avatar from './_components/Avatar';
import CardProfile from './_components/CardProfile';
import { checkCameraRollIOS } from '../_utils/PermissionsHandler'

const ios = Platform.OS === 'ios'

class ProfileScreen extends Component {

    state={

    }

    componentDidMount() {
        this.props.getUser()
    }

    changePwd = () => alert('nao implementado')

    changeInfo = () => alert('nao implementado')

    changeAvatar = () => {
        if (ios) checkCameraRollIOS()
        this._pickImage()
    }

    _pickImage = async () => {
        let image = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(image);

        if (!image.cancelled) {
            return image
        }
    };

    render() {
        const { user } = this.props

        if (user.loading)
            return (
                <Container>
                    <Header
                        nav={this.props.navigation.navigate}
                        backFunction={this.props.navigation.goBack} />
                    <Content>
                        <Spinner />
                    </Content>
                </Container>
            )

        const usr = user.data.attributes
        return (
            <Container>
                <Header
                    nav={this.props.navigation.navigate}
                    backFunction={this.props.navigation.goBack} />
                <Content>
                    <View style={styles.profileContent}>

                        <Avatar
                            uri={`${global.BASE_IMAGES}${usr.avatar.url}`}
                            change={this.changeAvatar} />

                        <CardProfile
                            usr={usr}
                            changeInfo={this.changeInfo}
                            changePwd={this.changePwd} />

                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    profileContent: {
        flex: 1,
    },
});

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: () => dispatch(generalOps.getUser()),
        editUser: () => dispatch(generalOps.editUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
