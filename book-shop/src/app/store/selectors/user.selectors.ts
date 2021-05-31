import { createSelector } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { RootState } from '../reducers/user.reducer';

const getSelectedData = (state: RootState): { userList: User[]} => state.user;

const getStateSelectedData = createSelector(
  (state: { rootState: RootState }) => state.rootState,
  getSelectedData
);

export { getStateSelectedData };
