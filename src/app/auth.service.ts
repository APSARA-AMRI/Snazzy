import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl="http://localhost:3000/user";

  constructor(private http:HttpClient) { }
  register(userData:any){
    return this.http.post(this.baseUrl,userData);
  }
  login(email:string,password:string){
    return this.http.get<any[]>(`http://localhost:3000/user?email=$(email) & password = $(password)`);
  }
}
