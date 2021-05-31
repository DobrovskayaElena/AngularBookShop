import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksModule } from './components/book/books.module';
import { BookComponent } from './components/book/book.component';
import { BookIdComponent } from './components/book-id/book-id.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartModule } from './components/cart/cart.module';
import { BookAddComponent } from './components/book-add/book-add.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AdminComponent } from './components/admin/admin.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { ServerResolver } from './services/server-resolver.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './components/user/user.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/products-list', pathMatch: 'full' },
  { path: 'products-list', component: BookComponent },
  { path: 'product/:id', component: BookIdComponent },
  { path: 'cart', component: CartListComponent },
  { path: 'order', component: OrderComponent },
  { path: 'admin', component: AdminComponent, canActivate : [AuthGuardService] },
  { path: 'admin/products', component: BooksListComponent },
  { path: 'admin/product/add', component: BookAddComponent },
  { path: 'admin/product/edit/:id', component: BookEditComponent, resolve: {serverResolver: ServerResolver} 
},
  { path: 'admin/orders', component: OrdersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), BooksModule, CartModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
