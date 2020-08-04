import { Injectable } from '@angular/core';
import {PRODUCTS_LIST} from '@shared/const/products.const';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = PRODUCTS_LIST;
  constructor() { }

  getProducts() {
    return this.products;
  }
}
