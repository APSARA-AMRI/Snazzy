import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
    dob: '',
    place: '',
    gender: ''
  };
onSubmit() {
  this.authService.register(this.user).subscribe(
    res=>{
      console.log("User registered successfully");
    }
  )
}
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

}
