import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as AuthActions from '../actions/auth.actions';
import * as fromApp from '../reducers/app.reducers';

@Injectable()
export class UserEffects {
  userLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LOGIN),
        concatLatestFrom((action) => this.store.select(fromApp.auth)),
        tap(([action, users]) => {
          if (users === 1) {
            console.log('Login!');
          } else {
            alert(users.length);
          }
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>
  ) {}
}
