import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootDispatch, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const useAppDispatch: () => RootDispatch = useDispatch

export { useAppSelector, useAppDispatch }
