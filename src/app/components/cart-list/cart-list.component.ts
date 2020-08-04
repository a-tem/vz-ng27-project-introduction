import { Component, OnInit } from '@angular/core';
import {IProductModel} from '@shared/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  productsInCart: IProductModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
