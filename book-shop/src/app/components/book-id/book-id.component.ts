import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/book.model';

import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-id',
  templateUrl: './book-id.component.html',
  styleUrls: ['./book-id.component.scss'],
})
export class BookIdComponent implements OnInit, OnDestroy {
  book: Book;
  id: number;
  editMode = false;
  private routeSubscription: Subscription;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });
  }

  onEdit() {
    this.router.navigate([`admin/product/edit/${this.id}`], {
      relativeTo: this.route,
    });
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
