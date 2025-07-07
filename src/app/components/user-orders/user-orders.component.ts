import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { User } from '../../models/user';
import { selectSelectedUser } from '../../store/user/user.selectors';
import { selectAllOrders } from '../../store/order/order.selectors';
import { Order } from '../../models/order';
import { AppState } from '../../store/app.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-orders',
  imports: [CommonModule],
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.scss'
})
export class UserOrdersComponent implements OnInit {
  selectedUser$!: Observable<User | null>;
  ordersForSelectedUser$!: Observable<Order[]>;

  constructor(private store: Store<AppState>) {
    this.selectedUser$ = this.store.select(selectSelectedUser);
    this.ordersForSelectedUser$ = this.store.select(selectSelectedUser).pipe(
      map(user => {
        if (!user) return [];
        return this.getOrdersForUser(user.id);
      }),
      map(obs => obs instanceof Array ? obs : [])
    );
  }

  ngOnInit() { }

  getOrdersForUser(userId: number): Order[] {
    let orders: Order[] = [];
    this.store.select(selectAllOrders).subscribe(allOrders => {
      orders = allOrders.filter((order: Order) => order.userId === userId);
    }).unsubscribe();
    return orders;
  }
}
