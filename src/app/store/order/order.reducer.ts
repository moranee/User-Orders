import { loadOrders } from './../order/order.actions';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Order } from '../../models/order';
import * as OrderActions from '../order/order.actions';

export interface OrdersState extends EntityState<Order> { }
export const orderAdapter: EntityAdapter<Order> = createEntityAdapter<Order>();
export const initialState: OrdersState = orderAdapter.getInitialState();

export const orderReducer = createReducer(
  initialState,
  on(OrderActions.loadOrders, (state, { orders }) =>
    orderAdapter.setAll(orders, state)
  ),
  on(OrderActions.addOrder, (state, { order }) => orderAdapter.addOne(order, state)),
  on(OrderActions.updateOrder, (state, { order }) =>
    orderAdapter.updateOne({ id: order.id, changes: order }, state)
  ),
  on(OrderActions.deleteOrder, (state, { id }) => orderAdapter.removeOne(id, state))
);

export const { selectAll, selectEntities } = orderAdapter.getSelectors();