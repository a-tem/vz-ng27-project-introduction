import {Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appButtonStyle]'
})
export class ButtonStyleDirective implements OnInit, OnChanges {
  @Input() appButtonStyle: string;

  constructor(private el: ElementRef, private rndr: Renderer2) {

  }

  ngOnInit() {
    this.getButtonClasses()
      .split(/\s/i)
      .forEach(className => this.rndr.addClass(this.el.nativeElement, className));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.appButtonStyle.currentValue !== this.appButtonStyle) {
      this.appButtonStyle = changes.appButtonStyle.currentValue;
    }
  }

  getButtonClasses() {
    const color = this.appButtonStyle ? this.appButtonStyle : 'blue';
    return `inline-block bg-${color}-500 hover:bg-${color}-700 text-white py-2 px-4 rounded`;
  }
}
