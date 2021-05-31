import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { HttpClientService } from 'src/app/services/http-client.service';

import {
  GetUserData,
  UserDataWithError,
  UserDataErrorAction,
  UserDataSuccessAction,
} from '../actions/user.actions';

@Injectable()
export class RootEffects {
  getUserDataEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetUserData),
      tap(() => {
        console.log('New getUserEffect occurreed in queue');
      }),
      mergeMap((action) => {
        console.log('New getUserData running');
        return this.httpClient.getData().pipe(
          map((res) => UserDataSuccessAction({ user: res })),
          catchError((error) => of(UserDataErrorAction({ error }))),
          tap(() => {
            console.log('getUserEffect Finished');
          })
        );
      })
    )
  );

  getUserDataWithErrorEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDataWithError),
      tap(() => {
        console.log('New getUseWithErrorEffect occurreed in queue');
      }),
      mergeMap((action) => {
        console.log('New getUserData running');
        return this.httpClient.getApiError().pipe(
          map((res) => UserDataSuccessAction({ user: res })),
          catchError((error) => of(UserDataErrorAction({ error }))),
          tap(() => {
            console.log('getUseWithErrorEffect Finished');
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private httpClient: HttpClientService
  ) {}
}
