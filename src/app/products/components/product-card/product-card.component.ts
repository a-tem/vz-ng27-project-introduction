import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {map, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

import {IProductModel} from '@shared/models/product.model';

import {CartService} from '@cart/services/cart.service';
import {ProductsService} from '@products/services';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit, OnDestroy {
  product: IProductModel = null;
  aliveSubj$ = new Subject();

  constructor(private route: ActivatedRoute,
              private cartService: CartService,
              private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map(params => params.get('productId')),
        takeUntil(this.aliveSubj$),
      )
      .subscribe(productId => {
        this.product = this.productsService.getProductById(productId);
      });
  }

  onProductPurchased(product: IProductModel) {
    this.cartService.addProduct(product);
  }

  ngOnDestroy() {
    this.aliveSubj$.complete();
  }

}
