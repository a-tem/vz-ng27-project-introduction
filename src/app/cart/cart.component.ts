import { Component, OnInit } from '@angular/core';
import {CartService} from '@cart/services';
import {Router} from '@angular/router';
import {Confirm} from '@shared/decorators/confirm.decorator';
import {LocalStorageService} from '@core/services/local-storage.service';
import {PRODUCTS_FOR_ORDER} from '@shared/const/storage.const';
import {CartPromiseService} from '@cart/services/cart-promise.service';
import {ICartCombinedItem} from '@shared/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartCombinedItems$: Promise<ICartCombinedItem[]>;
  totalSum: number;
  quantity: number;

  constructor(public cartService: CartService,
              public cartPromiseService: CartPromiseService,
              private router: Router,
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    // this.cartCombinedItems$ = this.cartService.cartCombinedItems$;
  }

  @Confirm('Are you really want to clear the Cart?')
  clearCart() {
    this.cartService.clearCart();
  }

  createOrder() {
    // todo: commented out for dev purposes
    // this.localStorageService.setItem(PRODUCTS_FOR_ORDER, this.cartService.cartProductsList);
    this.router.navigate(['order']);
  }

}
