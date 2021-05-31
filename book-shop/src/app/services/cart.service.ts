import { Injectable } from '@angular/core';

import { Book } from 'src/app/models/book.model';
import { Cart } from '../models/cart.model';
@Injectable()
export class CartService {
  private carts: Record<string, Cart> = {};

  countBooks = 0;
  totalBooksPrice = 0;

  private updateCartData(
    changedBooksNumber: number,
    multiplier: 1 | -1,
    oneBookPrice: number
  ): void {
    this.countBooks += changedBooksNumber * multiplier;
    this.totalBooksPrice += changedBooksNumber * multiplier * oneBookPrice;
  }

  getCarts() {
    return this.carts;
  }

  addToCart(book: Book) {
    if (!this.carts[book.id]) {
      this.carts[book.id] = { ...book, count: 1 };
      this.updateCartData(1, 1, book.price);
    }
  }

  removeBook(cart: Cart) {
    delete this.carts[cart.id];
    this.updateCartData(cart.count, -1, cart.price);
  }

  removeAllBooks() {
    this.carts = {};
    this.countBooks = 0;
    this.totalBooksPrice = 0;
    return this.carts;
  }

  increaseQuantity(cart: Cart) {
    this.carts[cart.id].count++;
    this.updateCartData(1, 1, cart.price);
  }

  decreaseQuantity(cart: Cart) {
    if (this.carts[cart.id].count > 0) {
      this.carts[cart.id].count--;
      this.updateCartData(1, -1, cart.price);
    }
  }
}
