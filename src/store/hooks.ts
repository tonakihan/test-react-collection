import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

/* Создали свои версии hooks для избавления от проблем:
 * useSelector - не прописывать тип принемаемного значения;
 * useDispath - by default не знает о thunks;
 * 
 * Используем во всем приложении вместо обычных `useDispatch` и `useSelector`.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
