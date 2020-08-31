import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddProductComponent, DashboardComponent, OrdersListComponent, ProductsListComponent} from '@app/admin/components';
import {AdminComponent} from '@app/admin/admin.component';
import {ProductResolveGuard} from '@app/admin/guards/product-resolve-guard.service';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
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
        component: AddProductComponent,
        resolve: {
          product: ProductResolveGuard
        }
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
