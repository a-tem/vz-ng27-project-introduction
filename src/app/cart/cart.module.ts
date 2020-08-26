import { NgModule } from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {CartItemComponent, CartListComponent} from '@cart/components';
import {CartRoutingModule} from '@cart/cart-routing.module';
import {CartComponent} from '@cart/cart.component';


@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartItemComponent,
  ],
  imports: [
    SharedModule,
    CartRoutingModule,
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
