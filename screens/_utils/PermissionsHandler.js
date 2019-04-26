export const checkCameraRollIOS = () => {
    const { Permissions } = Expo
    const { status } = Permissions.getAsync(Permissions.CAMERA_ROLL)
    if (!status) Permissions.askAsync(Permissions.CAMERA_ROLL)
}

