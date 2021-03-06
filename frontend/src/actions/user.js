import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_IMG, USER_UDID, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_UPDATE } from '../reducers/types'
import axios from 'axios'

export const register = (name, email, password, img) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/signup/', { name, email, password, img }, config)
        if (data.error) {
            throw new Error(data.error);
        }
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (err) {
        dispatch({ type: USER_REGISTER_FAIL, payload: err.message })
    }
}

export const login = (email, password, img) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/login/', { email, password, img }, config)
        if (data.error) {
            throw new Error(data.error);
        }
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (err) {
        dispatch({ type: USER_LOGIN_FAIL, payload: err.message })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: USER_LOGOUT
    })
}

export const setImg = (dataURI) => (dispatch) => {
    dispatch({
        type: USER_IMG,
        payload: dataURI
    })
}

export const setUdidStatus = (isVerified) => (dispatch) => {
    dispatch({
        type: USER_UDID,
        payload: isVerified
    })
}

export const getUserDetails = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`profile/`, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({ type: USER_DETAILS_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.response })
    }
}

export const updateUserDetails = (formData, history) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_UPDATE
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`update/`, formData, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

        history.push('/dashboard')
    } catch (err) {
        dispatch({ type: USER_DETAILS_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.response })
    }
}

export const addUserExperience = (formData, history) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_UPDATE
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/addExperience/`, formData, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

        history.push('/dashboard')
    } catch (err) {
        dispatch({ type: USER_DETAILS_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.response })
    }
}

export const addUserEducation = (formData, history) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_UPDATE
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/addEducation/`, formData, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

        history.push('/dashboard')
    } catch (err) {
        dispatch({ type: USER_DETAILS_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.response })
    }
}
