import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  // Calculate total cart value
  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }

  // Remove item from the cart
  removeItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
    this.cartItems = this.cartService.getCartItems();  // Refresh the cart items
    this.calculateTotal();  // Recalculate total
  }

  // "Buy Now" - Simulate checkout (clear cart and show message)
  buyNow() {
    this.cartService.clearCart();
    this.cartItems = [];
    this.total = 0;
    alert('Thank you for your purchase! Your cart is now empty.');
  }

  // Toggle item quantity (increase/decrease)
  changeQuantity(item: any, increment: boolean) {
    if (increment) {
      item.quantity += 1;
    } else if (item.quantity > 1) {
      item.quantity -= 1;
    }
    this.cartService.updateCartItem(item);
    this.calculateTotal();
  }
}
