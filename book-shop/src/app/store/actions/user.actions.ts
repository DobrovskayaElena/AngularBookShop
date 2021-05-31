import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

const USER_DATA = '[UsersPage] Load Users';
const USER_DATA_WITH_ERROR = '[UsersPage] Load Users With Error';
const USER_DATA_ERROR_ACTION = '[UsersPage] Load Users Error';
const USER_DATA_SUCCESS_ACTION = '[UsersPage] Load Users Success';

export const GetUserData = createAction(USER_DATA);

export const UserDataWithError = createAction(USER_DATA_WITH_ERROR);

export const UserDataErrorAction = createAction(
  USER_DATA_ERROR_ACTION,
  props<{ error: any }>()
);

export const UserDataSuccessAction = createAction(
  USER_DATA_SUCCESS_ACTION,
  props<{ user: { userList: User[] } }>()
);
