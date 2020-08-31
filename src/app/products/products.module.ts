import { NgModule } from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {ProductsRoutingModule} from '@products/products-routing.module';
import {ProductCardComponent, ProductComponent, ProductListComponent} from '@products/components';
import {ProductsComponent} from '@products/products.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    ProductCardComponent,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
