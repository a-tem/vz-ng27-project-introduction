import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICartCombinedItem} from '@shared/models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {

  @Input() item: ICartCombinedItem;
  @Input() isOdd: boolean;

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
