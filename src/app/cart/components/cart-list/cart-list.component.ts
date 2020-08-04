import { Component, OnInit } from '@angular/core';
import {IProductModel} from '@shared/models/product.model';
import {CartService} from '@cart/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  productsInCart: IProductModel[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productsInCart = this.cartService.productsList;
  }

}
