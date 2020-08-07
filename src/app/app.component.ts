import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'shop';

  @ViewChild('appName') appName: ElementRef;

  ngAfterViewInit() {
    this.appName.nativeElement.textContent = 'Shop Application (from component)';
  }

}
