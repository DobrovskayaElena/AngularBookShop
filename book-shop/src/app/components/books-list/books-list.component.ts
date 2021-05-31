import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../../models/book.model';

import { BooksService } from '../../services/books.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  @ViewChild('appTitle')
  public appTitle: Element;

  books: Observable<Book[]>;

  constructor(
    private booksService: BooksService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.booksService.getBooks();
  }

  getBook(id) {
    this.booksService.getBook(id);
  }

  checkIsAvailable(book) {
    if (book.isAvailable === false) {
      return true;
    }
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
    console.log(this.appTitle);
  }
}
