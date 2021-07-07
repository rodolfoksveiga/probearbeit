// Import components, functions, types, and variables
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { meetingsReducer } from './meetingsReducer'

// Types and interfaces
export type TRootState = ReturnType<typeof rootReducer>

// Reducer
const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    meetings: meetingsReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)
