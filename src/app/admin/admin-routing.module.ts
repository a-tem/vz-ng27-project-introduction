import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddProductComponent, OrdersListComponent, ProductsListComponent} from '@app/admin/components';
import {AdminComponent} from '@app/admin/admin.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'products-list',
        component: ProductsListComponent
      },
      {
        path: 'products-list/add',
        component: AddProductComponent
      },
      {
        path: 'products-list/edit/:id',
        component: AddProductComponent
      },
      {
        path: 'orders-list',
        component: OrdersListComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
