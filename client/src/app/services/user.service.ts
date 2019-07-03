import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;
  constructor(private httpClient:HttpClient) { }

  newu(u :User){
    return this.httpClient.post<User>('http://localhost:6789/nuser',u).subscribe(res=>{
    });
  }
  getallusers():Observable<User>{
   return this.httpClient.get<User>('http://localhost:6789/allusers')
  }
}
