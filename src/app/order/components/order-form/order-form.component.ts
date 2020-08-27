import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '@app/order/services/order.service';
import {Router} from '@angular/router';
import {Confirm} from '@shared/decorators/confirm.decorator';
import {ICartCombinedItem} from '@shared/models/cart.model';
import {IOrderData} from '@shared/models/order.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFormComponent implements OnInit {

  @Input() products: ICartCombinedItem[];

  @ViewChild('orderFirstName') orderFirstName: ElementRef;
  @ViewChild('orderLastName') orderLastName: ElementRef;
  @ViewChild('orderCity') orderCity: ElementRef;
  @ViewChild('orderState') orderState: ElementRef;
  @ViewChild('orderZip') orderZip: ElementRef;

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit(): void {
  }

  @Confirm('Return to the Products page?')
  backToProducts() {
    this.goToProducts();
  }

  @Confirm('Proceed with existing data?')
  confirmOrder() {
    const orderData: IOrderData = {
      user: {
        firstName: this.getNativeElementValue(this.orderFirstName),
        lastName: this.getNativeElementValue(this.orderLastName),
        city: this.getNativeElementValue(this.orderCity),
        state: this.getNativeElementValue(this.orderState),
        zip: this.getNativeElementValue(this.orderZip),
      },
      products: this.products,
      created: Date.now(),
    };

    if (this.orderService.saveOrder(orderData)) {
      this.goToProducts();
    }
  }

  private goToProducts() {
    this.router.navigate(['home']);
  }

  private getNativeElementValue(el: ElementRef) {
    return el.nativeElement.value;
  }

}
