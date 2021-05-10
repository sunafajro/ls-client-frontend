import { configureStore } from './configureStore';

export const store = configureStore();

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
