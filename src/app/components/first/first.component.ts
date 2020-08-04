import {Component, OnInit} from '@angular/core';
import {ECategoryEnum} from '@shared/enums/category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name = 'First Name';
  description = 'First Description';
  price = 3;
  category: ECategoryEnum = ECategoryEnum.First;
  isAvailable = true;

  constructor() { }

  ngOnInit(): void {
  }

}
