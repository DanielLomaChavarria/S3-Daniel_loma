import { createReducer, on } from '@ngrx/store';
import { loadPlatos, loadPlatosSuccess, loadPlatosFailure } from '../actions/app.actions';
import { Plato } from '../models/plato.model';

export interface AppState {
  platos: Plato[];
  error: any;
}

export const initialState: AppState = {
  platos: [],
  error: null,
};

const _appReducer = createReducer(
  initialState,
  on(loadPlatos, (state) => ({ ...state, error: null })),
  on(loadPlatosSuccess, (state, { platos }) => ({ ...state, platos })),
  on(loadPlatosFailure, (state, { error }) => ({ ...state, error }))
);

export function appReducer(state: AppState | undefined, action: any): AppState {
  return _appReducer(state, action);
}
