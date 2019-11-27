import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {items} from './type-items'
import {ITEMS} from './data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getItems(): Observable<items[]> {
    return of (ITEMS);
  }

  getItem(id: number): Observable<items> {
    return of(ITEMS.find(item => item.id === id));
  }
}
