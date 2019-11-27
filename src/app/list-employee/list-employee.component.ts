import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {items} from '../type-items';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  emloyee: items[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.employeeService.getItems()
      .subscribe(emloyee => this.emloyee = emloyee);
  }

}
