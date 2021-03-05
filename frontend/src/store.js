import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/user'

// make a master reducer
const reducer = combineReducers({
    // reducers
    userLogin: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

// initial state of store
const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage,
    }
}

const middleware = [thunk]

// make a store
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store