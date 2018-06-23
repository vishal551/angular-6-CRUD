import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Shared/employee.service';
import { Employee } from '../Shared/employee.model'
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService, private tostr: ToastrService) { }


  ngOnInit() {
    this.GetEmployee();
   
  }
  GetEmployee() {
    this.employeeService.getEmployee();
  }
  ShowForEdit(emp: Employee) {

    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }
  DeleteEmployee(id: number) {
    if (confirm("Are you sure do you want to delete employee..?") == true) {
      this.employeeService.DeleteEmployee(id).subscribe(x => {
        this.employeeService.getEmployee();
        this.tostr.error("Employee deleted successfully","Employee Register")
      });
    }
  }
}
