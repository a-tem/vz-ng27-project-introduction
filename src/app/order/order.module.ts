import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from '@app/order/order.component';
import {OrderFormComponent} from '@app/order/components';


@NgModule({
  declarations: [
    OrderComponent,
    OrderFormComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
