import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-dialog',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent implements OnInit {

  user: User = { id: 0, name: '' };
  @Output() save = new EventEmitter<User>();
  @Output() cancel = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  onSave() {
    this.save.emit(this.user);
  }

  onCancel() {
    this.cancel.emit();
  }
}
