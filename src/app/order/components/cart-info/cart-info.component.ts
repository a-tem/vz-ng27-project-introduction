import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {OrderService} from '@app/order/services/order.service';
import {Confirm} from '@shared/decorators/confirm.decorator';
import {Router} from '@angular/router';
import {ICartCombinedItem} from '@shared/models/cart.model';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartInfoComponent implements OnInit {
  @Input() products: ICartCombinedItem[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getProductsSum() {
    return this.products.reduce((acc, item) => acc + item.items.reduce((innAcc, product) => innAcc += product.price, 0), 0);
  }

  @Confirm('Go back to Cart page?')
  goToCart() {
    this.router.navigate(['cart']);
  }

}
