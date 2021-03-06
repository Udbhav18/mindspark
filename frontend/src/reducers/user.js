import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_IMG, USER_UDID, USER_REGISTER_REQUEST, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_RESET } from './types'

export const userLoginReducer = (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case USER_REGISTER_REQUEST:
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_REGISTER_SUCCESS:
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: payload
            }
        case USER_REGISTER_FAIL:
        case USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case USER_IMG:
            return {
                ...state,
                img: payload
            }
        case USER_UDID:
            return {
                ...state,
                udidVerified: payload
            }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    const { type, payload } = action
    switch (type) {
        case USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_DETAILS_SUCCESS:
            return {
                loading: false,
                user: payload
            }
        case USER_DETAILS_FAIL:
            return {
                loading: false,
                error: payload
            }
        case USER_DETAILS_RESET:
            return {
                user: {}
            }
        default:
            return state
    }
}