import { Directive } from '@angular/core';
import { HostListener, ElementRef, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appDir]'
})
export class DirDirective {

  constructor(private el: ElementRef,
      private renderer : Renderer2 ) { }

 /*  @HostListener('mouseenter')onMouseEnter(){
    this.renderer.addClass(this.el.nativeElement, 'highlight')
  } */

  @HostListener('mouseover')onmouseOver(){
    this.renderer.addClass(this.el.nativeElement, 'highlightLeave')
  }

}
