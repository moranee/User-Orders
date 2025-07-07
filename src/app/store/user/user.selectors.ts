import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userAdapter, UsersState } from './user.reducer';

export const selectUserState = createFeatureSelector<UsersState>('users');

export const {
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectUserTotal,
} = userAdapter.getSelectors(selectUserState);

export const selectSelectedUserId = createSelector(
  selectUserState,
  (state) => state.selectedUserId
);

export const selectSelectedUser = createSelector(
  selectUserState,
  selectSelectedUserId,
  (state, selectedUserId)=> {
    const user = selectedUserId ? state.entities[selectedUserId] : null;
    return user ?? null;
  }
);