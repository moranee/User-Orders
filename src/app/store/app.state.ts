import { ActionReducerMap } from '@ngrx/store';
import { userReducer, UsersState } from './user/user.reducer';
import { orderReducer, OrdersState } from './order/order.reducer';

export interface AppState {
  users: UsersState;
  orders: OrdersState;
}

export const appReducer: ActionReducerMap<AppState> = {
  users: userReducer,
  orders: orderReducer,
};
