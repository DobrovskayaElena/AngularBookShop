import {
    GetUserData,
    UserDataWithError,
    UserDataErrorAction,
    UserDataSuccessAction,
  } from '../store/actions/user.actions';
  
import { RootEffects } from '../store/effects/user.effects';
import { userReducer } from '../store/reducers/user.reducer';
import { getStateSelectedData } from '../store/selectors/user.selectors';

export const fromRoot = {
    GetUserData,
    UserDataWithError,
    UserDataErrorAction,
    UserDataSuccessAction, userReducer, RootEffects, getStateSelectedData
};