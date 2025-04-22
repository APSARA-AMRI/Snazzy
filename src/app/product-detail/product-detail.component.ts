import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  addToCart(): void {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(this.product);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.router.navigate(['/cart']);
  }

  constructor(private router:Router,private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.http
      .get(`https://fakestoreapi.com/products/${productId}`)
      .subscribe((res) => (this.product = res));
  }
}
