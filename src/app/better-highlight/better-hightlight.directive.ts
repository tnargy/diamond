import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseover(evnetData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }
  
  @HostListener('mouseleave') mouseleave(evnetData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }
}
