import { UpdateNotifications } from "Controllers/User/UpdateNotification"

export const INTERFACE_TYPE = {
    UserRepositry: Symbol.for('UserRepositry'),
    UserIntractor: Symbol.for("UserIntractor"),
    CreaterUser: Symbol.for("CreaterUser"),
    LoginUser: Symbol.for('LoginUser'),
    UpdateUser: Symbol.for('UpdateUser'),
    GetUserProfile: Symbol.for('GetUserProfile'),
    GetUserData: Symbol.for('GetUserData'),
    uploadImage: Symbol.for('uploadImage'),
    FollwUser: Symbol.for('FollwUser'),
    UnFollwUser: Symbol.for('UnFollwUser'),
    GetNotifications: Symbol.for('GetNotifications'),
    UpdateNotifications:Symbol.for("UpdateNotifications")
}

export const ADMIN_TYPE = {
    UserRepositry: Symbol.for('UserRepositry'),
    UserIntractor: Symbol.for("UserIntractor"),
    GetAllUsers: Symbol.for('GetAllUsers'),
    UserAccess: Symbol.for('UserAccess')
}