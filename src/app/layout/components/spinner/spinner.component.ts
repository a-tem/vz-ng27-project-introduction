import { Component, OnInit } from '@angular/core';
import {LayoutService} from '@app/layout/services/layout.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
  }

}
