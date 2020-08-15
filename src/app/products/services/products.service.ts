import { Injectable } from '@angular/core';
import {PRODUCTS_LIST} from '@shared/const/products.const';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = PRODUCTS_LIST;
  constructor() { }

  getProducts() {
    return of(this.products);
  }
}
