import { createSlice } from '@reduxjs/toolkit'

// interfaces
import { RootState } from '@/plugins/redux'

// Type for our state
interface AppState {
  app_isOpenMobileMenu: boolean
}

// Initial state
const initialState: AppState = {
  app_isOpenMobileMenu: false,
}

// Actual Slice
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    app_toggleMobileMenu(state) {
      state.app_isOpenMobileMenu = state.app_isOpenMobileMenu ? false : true
    },
  },
})

export const app_reducerActions = appSlice.actions

export const app_selectState = (state: RootState): AppState => state.app
