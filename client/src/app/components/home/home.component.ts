import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/models/user';
import {UserService} from 'src/app/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private router: Router) {

    this.user = {
      _id: '',
      name: '',
      password: '',
      email: ''
    };
  }

  ngOnInit() {
    // this.userService.getallusers().subscribe(res=>{
    //   console.log(res);
    // });
  }

  newu() {
    this.userService.newu(this.user).subscribe((user: User) => {
      this.user = user;
      this.router.navigate(['/login']);
    });
    console.log(this.user);
  }
}
