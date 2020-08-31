import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CartService} from '@cart/services';
import {AuthService} from '@core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public cartService: CartService, public authService: AuthService) {
  }

}
