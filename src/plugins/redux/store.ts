import { configureStore, ThunkAction, Action, createListenerMiddleware } from '@reduxjs/toolkit'

// redux persist
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// slices
import { persistedAppSlice } from '@/features/app/redux'

// reducers
import { rootReducer } from './reducers'

// Config for Redux Persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [persistedAppSlice.name],
}

// Listener Middleware
export const listenerMiddleware = createListenerMiddleware()

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .prepend(listenerMiddleware.middleware)
      .concat([]),
  devTools: true,
})

// Interfaces
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>

const persistor = persistStore(store)

export { store, persistor }
