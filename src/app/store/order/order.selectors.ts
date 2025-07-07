import { createFeatureSelector } from '@ngrx/store';
import { orderAdapter, OrdersState } from '../order/order.reducer';

export const selectOrderState = createFeatureSelector<OrdersState>('orders');

export const {
  selectIds: selectOrderIds,
  selectEntities: selectOrderEntities,
  selectAll: selectAllOrders,
  selectTotal: selectOrderTotal,
} = orderAdapter.getSelectors(selectOrderState);

