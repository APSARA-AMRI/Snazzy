import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  console.log('User registered:', this.user);
}
  constructor() { }

  ngOnInit(): void {
  }

}
