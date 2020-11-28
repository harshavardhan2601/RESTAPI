import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  
  angForm: FormGroup;
  constructor(private route: ActivatedRoute,private fb: FormBuilder, private bs: EmployeeService,private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      typeofemployee: ['', Validators.required ],
      ename: ['', Validators.required ],
      email: ['', Validators.required ],
      ecellno: ['', Validators.required ],
      epassword:['', Validators.required]
    });
  }

  addEmployee() {
    var data = this.angForm.value
    console.log(this.angForm.value);
    this.bs.addEmployee(data);
    this.router.navigate(['emp']);
  }

  ngOnInit(): void {
  }

}
