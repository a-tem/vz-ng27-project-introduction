import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProductModel} from '@shared/models/product.model';
import {ICartCombinedItem} from '@shared/models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item: ICartCombinedItem;

  @Output() itemAdded = new EventEmitter<string>();
  @Output() itemRemoved = new EventEmitter<string>();
  @Output() allItemsRemoved = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveItem() {
    this.itemRemoved.emit(this.item.name);
  }

  onAddItem() {
    this.itemAdded.emit(this.item.name);
  }

  onDeleteAllItems() {
    this.allItemsRemoved.emit(this.item.name);
  }

}
