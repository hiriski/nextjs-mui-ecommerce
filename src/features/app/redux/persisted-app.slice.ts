import { createSlice } from '@reduxjs/toolkit'

// Interfaces
import { RootState } from '@/plugins/redux'
import { PaletteMode } from '@mui/material'

// constants
import { __DEV__ } from '@/features/app/constants'

// i18n
const { i18n } = require('../../../../next-i18next.config')

// Type for our state
interface PersistedAppState {
  app_locale: string
  app_locales: string[]
  app_paletteMode: PaletteMode
}

// Initial state
const initialState: PersistedAppState = {
  app_locale: i18n.defaultLocale,
  app_locales: i18n.locales,
  app_paletteMode: __DEV__ ? 'dark' : 'light',
}

// Actual Slice
export const persistedAppSlice = createSlice({
  name: 'persisted_app',
  initialState,
  reducers: {
    app_setPaletteMode(state, action) {
      state.app_paletteMode = action.payload
    },
    app_togglePaletteMode(state) {
      state.app_paletteMode = state.app_paletteMode === 'dark' ? 'light' : 'dark'
    },
  },
})

export const persistedApp_reducerActions = persistedAppSlice.actions

export const persistedApp_selectState = (state: RootState): PersistedAppState => state.persisted_app
