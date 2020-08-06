import { NgModule } from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {CartListComponent} from '@cart/components/cart-list/cart-list.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
