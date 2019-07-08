import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User
  constructor(private userService:UserService) { 
    this.user = {
      _id:'',
      name:'',
      password:'',
      email:''
    }
  }

  ngOnInit() {
  }
  singin(user){
    this.userService.singin(user)
  }

}
