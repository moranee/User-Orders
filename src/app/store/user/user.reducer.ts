import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../../models/user';
import * as UserActions from './user.actions';

export interface UsersState extends EntityState<User> {
  selectedUserId: number | null;
}
export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();
export const initialState: UsersState = userAdapter.getInitialState({
  selectedUserId: null
});

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state, { users }) =>
    userAdapter.setAll(users, state)
  ),
  on(UserActions.upsertUser, (state, { user }) =>
    userAdapter.upsertOne(user, state)
  ),
  on(UserActions.deleteUser, (state, { id }) => userAdapter.removeOne(id, state)),
  on(UserActions.selectUser, (state, { id }) => ({
    ...state,
    selectedUserId: id,
  }))
);

export const { selectAll, selectEntities } = userAdapter.getSelectors();