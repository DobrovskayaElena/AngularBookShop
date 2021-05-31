import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickEvent]'
})
export class ClickEventDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.setEventChange('20px');
    this.setEventChangeColor('green');
  }

  private setEventChange(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', val);
  }

  private setEventChangeColor(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'border-color', val);
  }
}
