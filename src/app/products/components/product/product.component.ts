import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProductModel} from '@shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: IProductModel;

  @Output() productPurchased = new EventEmitter<IProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onBuy() {
    console.log('product was purchased', this.product);
    this.productPurchased.emit(this.product);
  }

}
