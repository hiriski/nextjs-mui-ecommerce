import { useAppSelector } from '@/plugins/redux'

import { persistedApp_selectState, persistedApp_reducerActions, app_selectState, app_reducerActions } from '@/features/app/redux'
import { useMemo } from 'react'

const useApp = () => {
  const appState = useAppSelector(app_selectState)
  const persistedAppState = useAppSelector(persistedApp_selectState)

  // aliases
  const { app_locale: locale, app_locales: locales } = persistedAppState

  const app_isDarkMode = useMemo<boolean>(() => {
    return persistedAppState.app_paletteMode === 'dark'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [persistedAppState.app_paletteMode])

  return {
    locale,
    locales,
    app_isDarkMode,
    ...appState,
    ...persistedAppState,
    ...app_reducerActions,
    ...persistedApp_reducerActions,
  }
}

export { useApp }
