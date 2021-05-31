import { Component } from '@angular/core';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [BooksService],
})
export class BookComponent {

}
