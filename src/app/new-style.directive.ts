import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appNewStyle]',
})
export class NewStyleDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.renderer.addClass(this.elRef.nativeElement, 'styleMovies');
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.renderer.removeClass(this.elRef.nativeElement, 'styleMovies');
  }
}
