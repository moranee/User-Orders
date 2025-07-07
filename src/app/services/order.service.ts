import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('assets/mockData/orders.json');
  }
}