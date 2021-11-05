import { Component, Inject, OnInit } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public employees: Employee[];
  public selected_employees: String[];
  isChecked: boolean;

  constructor(@Inject('BASE_URL') baseUrl: string) {
    this.isChecked = false;

    // axios.get<Employee[]>(baseUrl + 'employee').then(result => {
    //   this.employees = result.data;
    // })
    // .catch((error) => {
    //   console.error(error);
    // })

  }

  checkValue(values:any):void {
    console.log(values.currentTarget.checked);
    console.log(values.target.defaultValue);
    this.selected_employees.push(values.target.defaultValue)
  }

  getEmployees(@Inject('BASE_URL') baseUrl: string){
    // var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    // for (var i = 0; i < checkboxes.length; i++) {
    //   // this.selected_employees.push(checkboxes[i])
    //   console.log(checkboxes[i])
    // }

    // console.log(this.selected_employees);

    for (var i = 0; i < this.selected_employees.length; i++) {
      axios.post<Employee[]>(baseUrl + 'employee', 
      {
        "emp_no": this.selected_employees
      })
      .then((response) => {
        this.employees = response.data;
      })
      .catch((error) => {
        console.error(error);
      })
    }
    
  }

  ngOnInit(): void {

    axios.post<Employee[]>('http://cptsvs531:1000/middleware/oracle/hrms', 
    {
      "command": "SELECT * FROM ADMIN.v_emp_data_all_cpt "+
                "WHERE dept_code in ('1210','2105','2230')  "+
                "ORDER BY div_cls, dept_code"
    })
    .then((response) => {
      this.employees = response.data;
    })
    .catch((error) => {
      console.error(error);
    })

    // Send a POST request
    // axios({
    //   method: 'post',
    //   url: 'http://cptsvs531:1000/middleware/oracle/hrms',
    //   data: {
    //     "command": "SELECT * FROM ADMIN.v_emp_data_all_cpt WHERE dept_code='2230'"
    //   },
    // })
    // .then((response) => {
    //   // console.log(response.data)
    //   this.employees = response.data
    // })
    // .catch((error) => {
    //   console.error(error);
    // })


    // axios.get<Employee[]>('middleware/oracle/hrms', 
    // {
      
    // })
    // .then((response) => {
    //   this.employees = response.data;
    // })
    // .catch((error) => {
    //   console.error(error);
    // })

  }

}
