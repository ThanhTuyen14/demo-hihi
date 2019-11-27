import { InMemoryDbService } from 'angular-in-memory-web-api';
import {items} from './type-items';
import {ITEMS} from './data'
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    return{ITEMS};
  }
  constructor() { }
}
