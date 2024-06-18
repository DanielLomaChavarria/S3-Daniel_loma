import { ActionReducerMap } from '@ngrx/store';
import { appReducer } from './app.reducer';

export const reducers: ActionReducerMap<any> = {
  app: appReducer,
};

export const metaReducers: any[] = [];
