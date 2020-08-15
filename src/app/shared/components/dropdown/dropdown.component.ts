import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() dropdownList;

  @Output() selectedOption = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  optionSelected(optionValue) {
    this.selectedOption.emit(optionValue);
  }

}
