import { Component, OnInit } from '@angular/core';
import {CartService} from '@cart/services';
import {Router} from '@angular/router';

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

  onCreateOrder() {
    // return this.cartService.cartProductsList;
    this.router.navigate(['order']);
  }

}
