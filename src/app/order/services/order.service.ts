import { Injectable } from '@angular/core';
import {LocalStorageService} from '@core/services/local-storage.service';
import {CREATE_ORDER, PRODUCTS_FOR_ORDER} from '@shared/const/storage.const';
import {IOrderData} from '@shared/models/order.model';
import {CartService} from '@cart/services';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private localStorageService: LocalStorageService,
              private cartService: CartService) { }

  saveOrder(orderData: IOrderData) {
    this.localStorageService.addNestedItem(CREATE_ORDER, `order-${Date.now()}`, orderData);
    this.localStorageService.removeItem(PRODUCTS_FOR_ORDER);

    this.cartService.clearCart();

    return true;
  }
}
