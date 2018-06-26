import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
//import { DataTablePagerComponent } from './pager.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule, HttpModule, BrowserAnimationsModule, ToastrModule.forRoot(), NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
