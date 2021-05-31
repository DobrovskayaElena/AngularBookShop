import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AdminModule } from '../components/admin/admin.module';
import { OrderModule } from '../components/order/order.module';
//import { OrdersModule } from '../components/orders/orders.module';

import { BackgroundDirective } from './directives/background.directive';
import { BoldDirective } from './directives/bold.directive';
import { ClickEventDirective } from './directives/click-event.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [BackgroundDirective, BoldDirective, ClickEventDirective, OrderByPipe],
  imports: [
      FormsModule,
      //OrdersModule,
      OrderModule,
      AdminModule
      ],
  exports: [
      CommonModule, 
      FormsModule,
      BackgroundDirective,
      BoldDirective,
      ClickEventDirective,
      OrderByPipe
      ],
  providers: [],
})
export class SharedModule {}
