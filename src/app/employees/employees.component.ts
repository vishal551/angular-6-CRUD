import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './Shared/employee.service'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private table: NgxDatatableModule) { }

  ngOnInit() {
  }

}
