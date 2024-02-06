import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit{
  @Input() defaultColor: string  = 'transparent';
  @Input() highlighColor: string  = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(evnetData: Event) {
    this.backgroundColor = this.highlighColor;
  }
  
  @HostListener('mouseleave') mouseleave(evnetData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
