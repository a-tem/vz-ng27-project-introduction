import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ToggleOnClickDirective } from './directives/toggle-on-click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import {FormsModule} from '@angular/forms';
import { ButtonStyleDirective } from './directives/button-style.directive';

@NgModule({
  declarations: [HighlightDirective, ToggleOnClickDirective, OrderByPipe, DropdownComponent, ButtonStyleDirective],
  exports: [
    HighlightDirective,
    ToggleOnClickDirective,
    ButtonStyleDirective,
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
