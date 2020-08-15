import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ToggleOnClickDirective } from './directives/toggle-on-click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [HighlightDirective, ToggleOnClickDirective, OrderByPipe, DropdownComponent],
  exports: [
    HighlightDirective,
    ToggleOnClickDirective,
    OrderByPipe,
    DropdownComponent,
    CommonModule,
    FormsModule,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
