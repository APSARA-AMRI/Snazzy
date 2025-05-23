import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  logout(){
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
