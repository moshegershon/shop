import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  @ViewChild('emailRef') emailElemetRef:ElementRef;

  constructor(private userService: UserService, private router: Router) {
    this.user = {
      _id: '',
      name: '',
      password: '',
      email: '',
    };
  }

  ngOnInit() {
  }

  singin(user) {
    this.userService.singin(user).subscribe((res: User) => {
      this.user = res;
      this.router.navigate(['/product']);
    });
  }
  ngAfterViewInit(){
    this.emailElemetRef.nativeElement.focus();
  }

}
