import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUsers } from './store/user/user.actions';
import { loadOrders } from './store/order/order.actions';
import { OrderService } from './services/order.service';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'users-orders';

  constructor(private userService: UserService, private orderService: OrderService, private store: Store) {
    this.userService.getUsers().subscribe(users => {
      this.store.dispatch(loadUsers({ users }));
    });

    this.orderService.getOrders().subscribe(orders => {
      this.store.dispatch(loadOrders({ orders }));
    });
  }
}
