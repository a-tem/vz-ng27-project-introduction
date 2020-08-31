import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from '@app/layout/components/about/about.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    AboutComponent,
    SpinnerComponent
  ],
    exports: [
        AboutComponent,
        SpinnerComponent
    ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
