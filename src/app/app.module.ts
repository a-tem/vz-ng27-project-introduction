import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from '@core/components/first/first.component';
import { CartModule } from '@cart/cart.module';
import {ProductsModule} from '@products/products.module';
import {LayoutModule} from '@app/layout/layout.module';
import {AppRoutingModule} from '@app/app-routing.module';
import { HeaderComponent } from './core/components/header/header.component';
import { OrderModule } from './order/order.module';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    LayoutModule,
    OrderModule,
    SharedModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
