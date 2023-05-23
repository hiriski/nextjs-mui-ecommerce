// Redux Toolkit
import { combineReducers } from '@reduxjs/toolkit'

// slices
import { appSlice, persistedAppSlice } from '@/features/app/redux'

// plain reducers
const plainReducers = {
  [appSlice.name]: appSlice.reducer,
  [persistedAppSlice.name]: persistedAppSlice.reducer,
}

// root reducer
const rootReducer = combineReducers(plainReducers)

export { plainReducers, rootReducer }
