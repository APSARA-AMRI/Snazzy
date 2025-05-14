import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  addToCart(product: any) {
    this.cartService.addToCart(product);
    const count = this.cartService.getCartCount();
    alert(`Item added to cart! Cart has ${count} items now.`);
  }

  constructor(private router:Router,private route: ActivatedRoute, private http: HttpClient,private cartService:CartService) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.http
      .get(`https://fakestoreapi.com/products/${productId}`)
      .subscribe((res) => (this.product = res));
  }
}
