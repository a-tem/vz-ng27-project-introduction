import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IProductModel} from '@shared/models/product.model';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit, OnChanges {
  bgImage: SafeStyle = '';

  @Input() product: IProductModel;

  @Output() productPurchased = new EventEmitter<IProductModel>();

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.bgImage = this.getBase64BgImage(this.product.image);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.product.firstChange) {
      this.bgImage = this.getBase64BgImage((changes.product.currentValue as IProductModel).image);
    }
  }

  onBuy() {
    console.log('product was purchased', this.product);
    this.productPurchased.emit(this.product);
  }

  getBase64BgImage(b64string: string) {
    const imageString =  JSON.stringify(b64string).replace(/\\n/g, '');
    const style = `url(${imageString})`;
    return this.domSanitizer.bypassSecurityTrustStyle(style);
  }

}
