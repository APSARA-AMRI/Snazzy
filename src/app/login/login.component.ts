import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  
  constructor(private authService:AuthService){
    
  }
  login(){
    localStorage.setItem('isLoggedIn','true');
    alert("Login success");
  }
  onLogin() {
    const email=this.user.email;
    const password = this.user.password;
    this.authService.login(email,password).subscribe(
      res=>{
        console.log('Login Form Submitted:', this.user);
        if(res.length>0){
          alert("Login success");
        }
        else{
          alert("Login failed");
        }
      }
    )
  }
  
}
