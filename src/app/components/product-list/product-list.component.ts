import { Component, OnInit } from '@angular/core';
import {ProductsService} from '@app/services/products.service';
import {IProductModel} from '@shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList: IProductModel[];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsList = this.productsService.getProducts();
  }

}
