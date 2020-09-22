import {Component, Input, OnInit} from '@angular/core';
import {PRODUCTS_LIST} from '@shared/const/products.const';
import {Router} from '@angular/router';
import {AppSettingsService} from '@core/services/app-settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() cartItemsCount: number;

  constructor(
    public appSettingsService: AppSettingsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  openRandomProduct() {
    const max = PRODUCTS_LIST.length - 1;
    const min = 0;
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    this.router.navigate(['product', id]);
  }

}
