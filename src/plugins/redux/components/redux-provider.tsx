import React, { FC, ReactNode } from 'react'

// Redux & Redux Persist
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// Store
import { persistor, store } from '@/plugins/redux'
import CircularProgress from '@mui/material/CircularProgress'

interface ReduxProviderProps {
  children: ReactNode
}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
  const renderLoading = (): JSX.Element => <CircularProgress size={24} />
  return (
    <Provider store={store}>
      <PersistGate loading={renderLoading()} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider
