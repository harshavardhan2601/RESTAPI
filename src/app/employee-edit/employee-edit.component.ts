import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee: any = {};
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

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bs.editEmployee(params['id']).subscribe(res => {
        this.employee = res;
    });
  });
  }

  updateEmployee() {
    var data = this.angForm.value
    console.log(this.angForm.value);
    this.route.params.subscribe(params => {
      console.log(params['id'])
       this.bs.updateemployee(data, params['id']);
       this.router.navigate(['emp']);
 });
}

}
