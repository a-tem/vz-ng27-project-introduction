import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IProductModel} from '@shared/models/product.model';
import {Observable, of} from 'rxjs';
import {LayoutService} from '@app/layout/services/layout.service';
import {PRODUCTS_LIST} from '@shared/const/products.const';
import {delay, filter, map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<IProductModel>{

  constructor(private layoutService: LayoutService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IProductModel> | null {

    return of(PRODUCTS_LIST).pipe(
      tap(() => this.layoutService.showManually()),
      tap(() => console.log('> GRD TAP called')),
      delay(700),
      tap(() => this.layoutService.hideManually()),
      map(list => {
        const product = list.find(productItem => productItem.id === +route.paramMap.get('id'));
        if (product) {
          return product;
        } else {
          this.router.navigate(['/admin/products-list']);
          return null;
        }
      }),
      take(1),
    );
  }
}
