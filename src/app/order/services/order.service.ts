import { Injectable } from '@angular/core';
import {LocalStorageService} from '@core/services/local-storage.service';
import {IOrderData} from '@shared/models/order.model';
import {CartService} from '@cart/services';
import {OrderObservableService} from '@app/order/services/order-observable.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private localStorageService: LocalStorageService,
              private cartService: CartService,
              private orderObservableService: OrderObservableService) { }

  saveOrder(orderData: IOrderData) {
    return this.orderObservableService.saveOrder(orderData).pipe(
      tap(() => this.cartService.clearCart())
    );
    // this.localStorageService.addNestedItem(CREATE_ORDER, `order-${Date.now()}`, orderData);
    // this.localStorageService.removeItem(PRODUCTS_FOR_ORDER);

    // this.cartService.clearCart();

    // return true;
  }
}
