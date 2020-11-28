import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:4000/emp';

  constructor(private http: HttpClient) { }

  addEmployee(data) {
    const obj = {
      typeofemployee: data.typeofemployee,
      ename: data.ename,
      email: data.email,
      ecellno: data.ecellno,
      epassword:data.epassword
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getemployees() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editEmployee(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

    updateemployee(data, id) {
      const obj = {
        typeofemployee: data.typeofemployee,
        ename: data.ename,
        email: data.email,
        ecellno: data.ecellno,
        epassword:data.epassword
        };
      console.log(obj);
      console.log(id);
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deleteemployee(id) {
      return this
                .http
                 .get(`${this.uri}/delete/${id}`);
    }


   
}

