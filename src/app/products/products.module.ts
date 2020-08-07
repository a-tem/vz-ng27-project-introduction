import { NgModule } from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {ProductListComponent} from '@products/components/product-list/product-list.component';
import {ProductComponent} from '@products/components/product/product.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
