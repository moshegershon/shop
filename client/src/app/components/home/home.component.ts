import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User
  constructor(private userService:UserService) { 

    this.user = {
    _id: '',
    name: '',
    password: '',
    email:''
  };
  };
  ngOnInit(){
    // this.userService.getallusers().subscribe(res=>{
    //   console.log(res);
    // });
  };
  newu() {
    this.userService.newu(this.user)
    console.log(this.user);
  };
};
