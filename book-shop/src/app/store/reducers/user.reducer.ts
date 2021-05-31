import { createReducer, on } from '@ngrx/store';
import {
  UserDataErrorAction,
  UserDataSuccessAction,
} from '../actions/user.actions';

import { User } from 'src/app/models/user.model';

export interface RootState {
  user: { userList: User[] } | null;
}

const initialState: RootState = {
  user: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserDataErrorAction, (state, action) => ({ error: action.error, user: null })),
  on(UserDataSuccessAction, (state, action) => ({ user: action.user,  error: null }))
);
