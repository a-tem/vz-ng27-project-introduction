import { Component, OnInit } from '@angular/core';
import {CartService} from '@cart/services';
import {Router} from '@angular/router';
import {Confirm} from '@shared/decorators/confirm.decorator';
import {LocalStorageService} from '@core/services/local-storage.service';
import {PRODUCTS_FOR_ORDER} from '@shared/const/storage.const';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService,
              private router: Router,
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  @Confirm('Are you really want to clear the Cart?')
  clearCart() {
    this.cartService.clearCart();
    console.warn('Not implemented yet');
  }

  createOrder() {
    // todo: confirmation?
    this.localStorageService.setItem(PRODUCTS_FOR_ORDER, this.cartService.cartProductsList);
    this.router.navigate(['order']);
  }

}
