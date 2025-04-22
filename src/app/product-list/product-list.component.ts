import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  goToProduct(id: number): void {
    this.router.navigate(['/products', id]);
  }
  constructor(private productService: ProductService,private router:Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
