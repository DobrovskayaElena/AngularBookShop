import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  countBooks = this.cartService.countBooks;
  totalBooksPrice = this.cartService.totalBooksPrice;
  direction: 'desc' | 'asc' = 'desc';
  field: 'name' | 'price' | 'count' = 'name';

  welcome = 'Cart';
  myDate = new Date();

  carts: Cart[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.updateDataFromService();
  }

  removeAllBooks() {
    this.cartService.removeAllBooks();
    this.updateDataFromService();
  }

  public updateDataFromService() {
    this.countBooks = this.cartService.countBooks;
    this.totalBooksPrice = this.cartService.totalBooksPrice;
    this.carts = Object.values(this.cartService.getCarts());
  }

  orderBooks(){
    this.router.navigate(['/order']);
  }
}
