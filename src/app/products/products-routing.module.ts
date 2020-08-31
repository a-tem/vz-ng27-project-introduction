import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from '@products/products.component';
import {ProductCardComponent, ProductComponent} from '@products/components';

const routes: Routes = [
  {
    path: 'home',
    component: ProductsComponent
  },
  {
    path: 'product/:productId',
    component: ProductCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {

}
