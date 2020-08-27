import { Component, OnInit } from '@angular/core';
import {CartService} from '@cart/services';
import {Router} from '@angular/router';
import {Confirm} from '@shared/decorators/confirm.decorator';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
  }

  @Confirm('Are you really want to clear the Cart?')
  clearCart() {
    this.cartService.clearCart();
    console.warn('Not implemented yet');
  }

  createOrder() {
    // todo: confirmation?
    this.router.navigate(['order']);
  }

}
