import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from '@app/order/order.component';
import {CartInfoComponent, OrderFormComponent} from '@app/order/components';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [
    OrderComponent,
    OrderFormComponent,
    CartInfoComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
