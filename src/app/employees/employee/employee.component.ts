import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Shared/employee.service'
import { NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { Employee } from '../Shared/employee.model'
import { debug } from 'util';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  employeeList: Employee[];
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.employeeService.selectedEmployee = {
      EmployeeID: null,
      FirstName: '',
      LastName: '',
      EmpCode: '',
      Position: '',
      Office: ''

    }
  }
  onSubmit(form: NgForm) {
    debugger;
    if (form.value.EmployeeID == null) {

      this.employeeService.postEmployee(form.value).subscribe(data => {
        console.log(data);
        this.resetForm(form);
        this.employeeService.getEmployee();
        this.toastr.success("New Employee is inserted successfully.", "Employee Record")
      });
    }
    else
    {
      this.employeeService.PutEmployee(form.value.EmployeeID, form.value).subscribe(data => {
        console.log(data);
        this.resetForm(form);
        this.employeeService.getEmployee();
        this.toastr.success("Employee is updated successfully.", "Employee Record")
      });
    }
  }

 
}

