import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CartService} from '@cart/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'shop';

  @ViewChild('appName') appName: ElementRef;

  constructor(public cartService: CartService) {
  }

  ngAfterViewInit() {
    this.appName.nativeElement.textContent = 'Shop Application (from component)';
  }

}
