import { Component, OnInit } from '@angular/core';
import {CartService} from '@cart/services/cart.service';
import {LocalStorageService} from '@core/services/local-storage.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  providers: [
    { provide: LocalStorageService, useValue: LocalStorageService}
  ]
})
export class CartListComponent implements OnInit {

  constructor(public cartService: CartService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  onItemAdded($event: string) {
    this.cartService.increaseQuantity($event);
  }

  onItemRemoved($event: string) {
    this.cartService.decreaseQuantity($event);
  }

  onIllItemsRemoved($event: string) {
    this.cartService.removeAllProducts($event);
  }

  isItemOdd(index) {
    return index % 2 !== 0;
  }

}
