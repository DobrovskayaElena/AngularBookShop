import { NgModule } from '@angular/core';

//import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders.component';

@NgModule({
    imports: [
       // SharedModule
    ],
    exports: [],
    declarations: [OrdersComponent],
})
export class OrdersModule {}