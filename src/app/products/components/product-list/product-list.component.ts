import { Component, OnInit } from '@angular/core';
import {ProductsService} from '@products/services/products.service';
import {IProductModel} from '@shared/models/product.model';
import {CartService} from '@cart/services/cart.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productsList: Observable<IProductModel[]>;
  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productsList = this.productsService.getProducts();
  }

  onProductPurchased(product: IProductModel) {
    this.cartService.addProduct(product);
  }

}
