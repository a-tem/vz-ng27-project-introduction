import { Component, OnInit } from '@angular/core';
import {OrderService} from '@app/order/services/order.service';
import {LocalStorageService} from '@core/services/local-storage.service';
import {ICartCombinedItem} from '@shared/models/cart.model';
import {PRODUCTS_FOR_ORDER} from '@shared/const/storage.const';
import {CartPromiseService} from '@cart/services/cart-promise.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  productsForOrder$: Promise<ICartCombinedItem[]>;

  constructor(private localStorageService: LocalStorageService,
              private cartPromiseService: CartPromiseService) { }

  ngOnInit(): void {
    // this.productsForOrder = this.localStorageService.getItem(PRODUCTS_FOR_ORDER);
    this.productsForOrder$ = this.cartPromiseService.loadCartState();
  }

}
