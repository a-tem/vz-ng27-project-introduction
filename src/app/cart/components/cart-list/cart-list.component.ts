import { Component, OnInit } from '@angular/core';
import {CartService} from '@cart/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {

  constructor(public cartService: CartService) { }

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
