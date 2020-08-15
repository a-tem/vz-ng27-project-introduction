import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appToggleOnClick]'
})
export class ToggleOnClickDirective {

  @Input() appToggleOnClick: string;

  constructor(private el: ElementRef, private rndr: Renderer2) { }

  @HostListener('click') onMouseClick() {
    if (!this.el.nativeElement.classList.contains(this.appToggleOnClick)) {
      this.rndr.addClass(this.el.nativeElement, this.appToggleOnClick);
    } else {
      this.rndr.removeClass(this.el.nativeElement, this.appToggleOnClick);
    }
  }
}
