import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { loadPlatos, loadPlatosSuccess, loadPlatosFailure } from '../actions/app.actions';

@Injectable()
export class AppEffects {
  loadPlatos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPlatos),
      mergeMap(() =>
        this.apiService.getPlatos().pipe(
          map((platos) => loadPlatosSuccess({ platos })),
          catchError((error) => of(loadPlatosFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
