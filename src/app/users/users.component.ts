import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersData: Users = {
    username: '',
    password: ''
  };

  users: any=[];

  constructor() { }

  ngOnInit(): void {
    axios.post('http://cptsvs531:1000/middleware/oracle/hrms',{
      command: "select * from admin.v_emp_data_all_cpt where dept_code='2230'"
    }).then(response => (
      // console.log(response)
      this.users = response.data.data
    ));
console.log(this.users)
    
  }

}
