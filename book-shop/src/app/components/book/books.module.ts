import { NgModule } from '@angular/core';

import { BookComponent } from './book.component';
import { SharedModule } from '../../shared/shared.module';
import { BooksListComponent } from '../books-list/books-list.component';
import { BookItemComponent } from '../book-item/book-item.component';
import { BookIdComponent } from '../book-id/book-id.component'
import { BookEditComponent } from '../book-edit/book-edit.component';
import { BookAddComponent } from '../book-add/book-add.component';

@NgModule({
    imports: [SharedModule],
    exports: [],
    declarations: [
        BookComponent, 
        BooksListComponent,
        BookIdComponent,
        BookItemComponent,
        BookEditComponent,
        BookAddComponent
    ],
})
export class BooksModule {}