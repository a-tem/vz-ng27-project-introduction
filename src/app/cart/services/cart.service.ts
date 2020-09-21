import {Injectable} from '@angular/core';
import {IProductModel} from '@shared/models/product.model';
import {ICartCombinedItem} from '@shared/models/cart.model';
import {CartPromiseService} from '@cart/services/cart-promise.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: IProductModel[] = [];
  totalQuantity: number;
  totalSum: number;

  cartCombinedItems$: Promise<ICartCombinedItem[]>;

  constructor(private cartPromiseService: CartPromiseService) {
    this.cartCombinedItems$ = this.cartPromiseService.createOrLoadSessionData();
    this.cartCombinedItems$.then(resp => {
      this.cartProducts = resp.reduce((acc, cur) => {
        acc.push(...cur.items);
        return acc;
      }, []);
      this.totalQuantity = this.cartProducts.length;
    });
  }

  addProduct(product: IProductModel) {
    this.cartProducts.push(product);

    this.updateCartData();
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
    /*this.totalSum = this.cartProducts.reduce((acc, cur) => acc + cur.price, 0);*/
    this.totalQuantity = this.cartProducts.length;

    this.cartCombinedItems$ = this.cartPromiseService.updateCartState(this.convertProductsToCartItems()).then(resp => {
      console.log('> SRV updated', resp.cartItems);
      return resp.cartItems;
    });
  }

  private convertProductsToCartItems(): ICartCombinedItem[] {
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

}
