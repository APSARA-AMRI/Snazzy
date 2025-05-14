import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {
    const stored = localStorage.getItem('cartItems');
    this.cartItems = stored ? JSON.parse(stored) : [];
  }

  // Get full cart item list
  getCartItems(): any[] {
    return this.cartItems;
  }

  // Get current cart count
  getCartCount(): number {
    return this.cartItems.length;
  }
  addToCart(product: any): void {
    const existing = this.cartItems.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }

    this.saveCart();
  }
  removeFromCart(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.saveCart();
  }
  updateCartItem(updatedItem: any): void {
    const itemIndex = this.cartItems.findIndex(item => item.id === updatedItem.id);
    if (itemIndex > -1) {
      this.cartItems[itemIndex] = updatedItem;
    }
    this.saveCart();
  }
  clearCart(): void {
    this.cartItems = [];
    this.saveCart();
  }
  private saveCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
