import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

   user: User;
  private baseApi: String = 'http://localhost:6789/api/';

  constructor(private httpClient: HttpClient) {
  }

  newu(u: User) {
    return this.httpClient.post<User>('http://localhost:6789/nuser', u).subscribe(res => {
    });
    
  }
  singin(user){
  return this.httpClient.post<User>('http://localhost:6789/login', user).subscribe(res =>{
    
  })  
  }
}
