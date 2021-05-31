import { NgModule } from '@angular/core';

import { CartItemComponent } from '../cart-item/cart-item.component';
import { SharedModule } from '../../shared/shared.module';
import { CartComponent } from './cart.component';
import { CartListComponent } from '../cart-list/cart-list.component';
@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [CartItemComponent, CartComponent, CartListComponent],
})
export class CartModule {}
