import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ToggleOnClickDirective } from './directives/toggle-on-click.directive';

@NgModule({
  declarations: [HighlightDirective, ToggleOnClickDirective],
  exports: [
    HighlightDirective,
    ToggleOnClickDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
