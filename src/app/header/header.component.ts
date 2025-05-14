import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount:number=1;
  notificationCount:number=1;
  constructor(private router: Router,private cartService:CartService) { }

  ngOnInit(): void {
    this.cartCount = this.cartService.getCartCount();
  }

}
