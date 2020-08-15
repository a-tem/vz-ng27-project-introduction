import { Component, OnInit } from '@angular/core';
import {ProductsService} from '@products/services/products.service';
import {IProductModel} from '@shared/models/product.model';
import {CartService} from '@cart/services/cart.service';
import {Observable} from 'rxjs';
import {SORTING} from '@shared/const/sorting.const';
import {ORDERING} from '@shared/const/order.const';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productsList: Observable<IProductModel[]>;

  sortingList = SORTING;
  sortingOrder = ORDERING;

  sortingField = SORTING[0].value; // todo: handle initial value.
  orderingField = ORDERING[0].value; // todo: handle initial value.

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productsList = this.productsService.getProducts();
  }

  onProductPurchased(product: IProductModel) {
    this.cartService.addProduct(product);
  }

  onSortingFieldChanged(sortingValue: string) {
    this.sortingField = sortingValue;
  }

  onOrderFieldChanged(orderField: string) {
    this.orderingField = (orderField === 'true');
  }

}
