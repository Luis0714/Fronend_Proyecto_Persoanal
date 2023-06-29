import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTES } from 'src/apis-routes';
import { Observable } from 'rxjs/internal/Observable';
import { GetUserModel } from 'src/app/Models/Users/GetUserModel';
import { User } from 'src/app/Models/Users/user.model';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
private apiUrl = `${API_ROUTES.UserUrl}`;
  constructor(
    private http: HttpClient
  ) { }

  create(data: Partial<User>): Observable<GetUserModel>{
   return this.http.post<User>(`${this.apiUrl}/createUser`,data)
  }
  update(id:number,data: Partial<User>): Observable<GetUserModel>{
    return this.http.post<User>(`${this.apiUrl}/update/${id}`,data)
   }
  getAll(){
    return this.http.get<User[]>(`${this.apiUrl}/getAllUsers`)
  }

}
