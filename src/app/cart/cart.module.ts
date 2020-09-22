import { NgModule } from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {CartItemComponent, CartListComponent} from '@cart/components';
import {CartRoutingModule} from '@cart/cart-routing.module';
import {CartComponent} from '@cart/cart.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartItemComponent,
  ],
  imports: [
    SharedModule,
    CartRoutingModule,
    HttpClientModule,
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
