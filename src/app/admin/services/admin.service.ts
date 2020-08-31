import { Injectable } from '@angular/core';
import {LocalStorageService} from '@core/services/local-storage.service';
import {CREATE_ORDER} from '@shared/const/storage.const';
import {IOrderData} from '@shared/models/order.model';
import {PRODUCTS_LIST} from '@shared/const/products.const';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private localStorageService: LocalStorageService) { }

  getStoredOrders() {
    return this.localStorageService.getItem<{[key: string]: IOrderData}>(CREATE_ORDER); // todo" specify type
  }

  getProductsList() {
    // todo: temporary solution. will be replaced by API call further
    return PRODUCTS_LIST;
  }
}
