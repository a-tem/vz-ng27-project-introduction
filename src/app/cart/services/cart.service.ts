import { Injectable } from '@angular/core';
import {IProductModel} from '@shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsList: IProductModel[] = [];
  constructor() { }

  addProductToCart(product: IProductModel) {
    this.productsList.push(product);
  }
}
