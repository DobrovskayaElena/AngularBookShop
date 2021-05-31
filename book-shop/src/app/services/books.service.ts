import { Injectable } from '@angular/core';

import { BookCategory } from '../models/book-category';
import { Book } from '../models/book.model';

import { Observable, of } from 'rxjs';

@Injectable()
export class BooksService {
  private books: Book[] = [
    new Book(
      1,
      "LEGO MINDSTORMS NXT 2.0: The King's Treasure",
      'Follow the adventures of Evan and his archaeologist uncle as they explore for treasure from an ancient kingdom.',
      50,
      BookCategory.Computing,
      2009,
      true,
      'https://images-na.ssl-images-amazon.com/images/I/51JHhXeqBSL._SX403_BO1,204,203,200_.jpg'
    ),
    new Book(
      2,
      'Princes of the Renaissance',
      'A beautifully illustrated history of the Renaissance told through the lives of its most important and influential patrons.',
      45,
      BookCategory.History,
      2021,
      true,
      'https://d2t3xdwbh1v8qy.cloudfront.net/content/B07YNNR5LT/resources/1331178637'
    ),
    new Book(
      3,
      "What's Mine and Yours",
      "What's Mine and Yours is a book about parents who try and fail and then try again. An extraordinary cast of characters, nuanced and full of insight. Read this book.",
      35,
      BookCategory.Romance,
      2021,
      false,
      'https://m.media-amazon.com/images/I/41gS352Nu2L.jpg'
    ),
  ];
  constructor() {}

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  getBook(id): Observable<Book> {
    var Product = this.books.find((i) => i.id == id);
    return of(Product);
  }

  checkIsAvailable(book) {
    if (book.isAvailable === false) {
      return true;
    }
  }
}
