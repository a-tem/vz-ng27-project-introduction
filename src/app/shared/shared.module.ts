import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ToggleOnClickDirective } from './directives/toggle-on-click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [HighlightDirective, ToggleOnClickDirective, OrderByPipe],
  exports: [
    HighlightDirective,
    ToggleOnClickDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
