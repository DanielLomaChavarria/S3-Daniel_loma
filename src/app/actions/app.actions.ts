import { createAction, props } from '@ngrx/store';
import { Plato } from '../models/plato.model';

export const loadPlatos = createAction('[Platos] Load Platos');
export const loadPlatosSuccess = createAction('[Platos] Load Platos Success', props<{ platos: Plato[] }>());
export const loadPlatosFailure = createAction('[Platos] Load Platos Failure', props<{ error: any }>());
