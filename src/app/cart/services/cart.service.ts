import { Injectable } from '@angular/core';
import {IProductModel} from '@shared/models/product.model';
import {ICartCombinedItem, ICartInfo} from '@shared/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: IProductModel[] = [];
  totalQuantity: number;
  totalSum: number;

  constructor() { }

  addProduct(product: IProductModel) {
    this.cartProducts.push(product);

    this.updateCartData();
  }

  get cartProductsList(): ICartCombinedItem[] {
    return this.cartProducts.reduce((acc: ICartCombinedItem[], cur) => {
      const itemIndex = acc.findIndex(item => item.name === cur.name);
      if (itemIndex >= 0) {
        acc[itemIndex].items.push(cur);
      } else {
        acc.push({name: cur.name, image: cur.image, items: [cur]});
      }
      return acc;
    }, []);
  }

  increaseQuantity(name: string) {
    const item = this.cartProducts.find(listItem => listItem.name === name);
    this.cartProducts.push(item);

    this.updateCartData();
  }

  decreaseQuantity(name: string) {
    const itemIndex = this.cartProducts.findIndex(listItem => listItem.name === name);
    this.cartProducts.splice(itemIndex, 1);

    this.updateCartData();
  }

  removeAllProducts(name: string) {
    this.cartProducts = this.cartProducts.filter(item => item.name !== name);

    this.updateCartData();
  }

  clearCart() {
    this.cartProducts = [];

    this.updateCartData();
  }

  updateCartData() {
    this.totalSum = this.cartProducts.reduce((acc, cur) => acc + cur.price, 0);
    this.totalQuantity = this.cartProducts.length;
  }

}
