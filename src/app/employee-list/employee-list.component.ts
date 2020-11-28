import { Component, OnInit } from '@angular/core';
import Employee from '../employee';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[];

  constructor(private bs: EmployeeService) { }

  ngOnInit(): void {
    this.bs
      .getemployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
    });
    console.log(this.employees); 
  }

  deleteEmployee(id) {
    this.bs.deleteemployee(id).subscribe(res => {
      console.log('Deleted');
      window.location.reload();
    });
  }

}
