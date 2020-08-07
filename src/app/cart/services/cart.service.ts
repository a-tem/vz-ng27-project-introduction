import { Injectable } from '@angular/core';
import {IProductModel} from '@shared/models/product.model';
import {ICartCombinedItem, ICartInfo} from '@shared/models/cart.model';

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

  get cartProductsList(): ICartCombinedItem[] {
    return this.productsList.reduce((acc: ICartCombinedItem[], cur) => {
      const itemIndex = acc.findIndex(item => item.name === cur.name);
      if (itemIndex >= 0) {
        acc[itemIndex].items.push(cur);
      } else {
        acc.push({name: cur.name, items: [cur]});
      }
      return acc;
    }, []);
  }

  addItem(name: string) {
    const item = this.productsList.find(listItem => listItem.name === name);
    this.productsList.push(item);
  }

  removeItem(name: string) {
    const itemIndex = this.productsList.findIndex(listItem => listItem.name === name);
    this.productsList.splice(itemIndex, 1);
  }

  removeAllItems(name: string) {
    this.productsList = this.productsList.filter(item => item.name !== name);
  }

}
