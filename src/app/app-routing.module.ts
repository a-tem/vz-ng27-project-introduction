import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from '@products/components/product-list/product-list.component';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from '@core/components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
