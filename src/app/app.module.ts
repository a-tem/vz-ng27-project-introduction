import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from '@core/components/first/first.component';
import { CartModule } from '@cart/cart.module';
import {ProductsModule} from '@products/products.module';
import {LayoutModule} from '@app/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
