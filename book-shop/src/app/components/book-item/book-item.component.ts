import { Component, Input } from '@angular/core';

import { Book } from 'src/app/models/book.model';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  styles: [
  ]
})
export class BookItemComponent {
  @Input() book: Book;
  @Input() index: number;

  constructor(private cartService: CartService) {}

  checkIsAvailable(book) {
    if (book.isAvailable === false) {
      return true;
    }
  }

  addToCart(book) {
    this.cartService.addToCart(book);
  }
}
