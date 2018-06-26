import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../Shared/employee.service';
import { Employee } from '../Shared/employee.model'
import { ToastrService } from 'ngx-toastr'
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService, private tostr: ToastrService) { }

  @ViewChild(DatatableComponent) table: DatatableComponent;

  ngOnInit() {
    
    this.GetEmployee();

   
  }
  GetEmployee() {
 
    this.employeeService.getEmployee()
   
  }
  ShowForEdit(id: number) {

    this.employeeService.getEmployeebyID(id)
  }

  DeleteEmployee(id: number) {
    if (confirm("Are you sure do you want to delete employee..?") == true) {
      this.employeeService.DeleteEmployee(id).subscribe(x => {
        this.employeeService.getEmployee();
        this.tostr.error("Employee deleted successfully","Employee Register")
      });
    }
  }



  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.employeeService.employeeList.filter(function (d) {
      return d.FirstName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.employeeService.employeeList = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
