import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export const loadUsers = createAction(
  '[Users API] Load Users',
  props<{ users: User[] }>()
);

export const loadUsersSuccess = createAction(
  '[Users API] Load Users success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users API] Load Users failure',
  props<{ users: User[] }>()
);


export const upsertUser = createAction(
  '[User] Upsert User',
  props<{ user: User }>()
);

export const deleteUser = createAction(
  '[User] Delete User',
  props<{ id: number }>()
);

export const selectUser = createAction(
  '[User] Select User',
  props<{ id: number }>()
);
