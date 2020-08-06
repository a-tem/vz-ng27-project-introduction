import { Component, OnInit } from '@angular/core';
import {IProductModel} from '@shared/models/product.model';
import {CartService} from '@cart/services/cart.service';
import {ICartInfo} from '@shared/models/cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
