import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_IMG } from '../reducers/types'
import axios from 'axios'

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
        console.log(data);
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (err) {
        dispatch({ type: USER_LOGIN_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.response })
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

