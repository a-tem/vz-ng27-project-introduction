import { Injectable } from '@angular/core';
import {IProductModel} from '@shared/models/product.model';
import {ICartInfo} from '@shared/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsList: IProductModel[] = [];
  constructor() { }

  addProductToCart(product: IProductModel) {
    this.productsList.push(product);
  }

  get cartInfo(): ICartInfo {
    return {
      totalPrice: this.productsList.reduce((acc, cur) => acc + cur.price, 0),
      totalItems: this.productsList.length
    };
  }
}
