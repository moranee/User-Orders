import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { User } from '../../models/user';
import { selectAllUsers, selectSelectedUser } from '../../store/user/user.selectors';
import { selectUser, upsertUser } from '../../store/user/user.actions';
import { AppState } from '../../store/app.state';
import { CommonModule } from '@angular/common';
import { UserOrdersComponent } from '../user-orders/user-orders.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'users',
  imports: [CommonModule, UserOrdersComponent, UserDialogComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>;
  selectedUser$!: Observable<User | null>;
  showDialog: boolean = false;

  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(selectAllUsers);
    this.selectedUser$ = this.store.select(selectSelectedUser);
  }

  ngOnInit() { }

  selectUser(id: number) {
    this.store.dispatch(selectUser({ id }));
  }

  onUserClick(userId: number) {
    this.store.dispatch(selectUser({ id: userId }));
  }

  openDialog() {
    this.showDialog = true;
  }

  onCancelDialog() {
    this.showDialog = false;
  }

  onSaveUser(user: User) {
    this.store.dispatch(upsertUser({ user }));
    this.showDialog = false;
  }
}
