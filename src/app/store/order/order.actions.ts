import { createAction, props } from '@ngrx/store';
import { Order } from '../../models/order';

export const loadOrders = createAction(
  '[Orders API] Load Orders',
  props<{ orders: Order[] }>()
);

export const addOrder = createAction(
  '[Order] Add Order',
  props<{ order: Order }>()
);

export const updateOrder = createAction(
  '[Order] Update Order',
  props<{ order: Order }>()
);

export const deleteOrder = createAction(
  '[Order] Delete Order',
  props<{ id: number }>()
);
