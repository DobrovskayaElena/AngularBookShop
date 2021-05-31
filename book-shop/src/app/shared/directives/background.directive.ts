import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor('#cff5fa');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor('white');
  }

  private setBackgroundColor(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', val);
  }
}
