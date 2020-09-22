import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '@core/services/local-storage.service';
import {OrdersAPI} from '@app/order/services/orders.config';
import {CartAPI} from '@cart/services/cart.config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService,
              @Inject(OrdersAPI) private ordersUrl: string,
              @Inject(CartAPI) private cartUrl: string) { }

  getAsPromise() {
    this.http.get(this.ordersUrl)
  }

  getAsObservable() {

  }
}
