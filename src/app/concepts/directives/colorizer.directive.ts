import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  el: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { // Dep Injection 
    console.log('Inside Constructor');

    // Step 1: Find out the element in which the appColorizer directive is used.
    console.log(this.elRef.nativeElement);
    this.el = this.elRef.nativeElement;

    // Step 2: Pass on spl instructions to the element with js -- Not Recommended
    // el.style.backgroundColor = 'red';
    // el.style.color = 'white';
    // el.style.height = '400px';

    // Step 2: Pass on spl instructions to the element with angular -- [Recommended]
    this.renderer.setStyle(this.el, 'background-color', 'red');
    this.renderer.setStyle(this.el, 'color', 'white');
    this.renderer.setStyle(this.el, 'height', '300px');

    // TODO: learn about creating element in directive
  }

  // Let's work on handling events in directive - using HostListener Decorator
  @HostListener('mouseover', ['$event']) // $event will carry the whole event obj
  handleMouseover(): void{
    this.renderer.setStyle(this.el, 'background-color', 'yellow');
    this.renderer.setStyle(this.el, 'color', 'black');
  }

  // Let's work on handling events in directive - using HostListener Decorator
  @HostListener('mouseleave', ['$event'])
  handleMouseleave(): void{
    this.renderer.setStyle(this.el, 'background-color', 'red');
    this.renderer.setStyle(this.el, 'color', '#fff');
  }

  // TODO: Learn about @HostBinding()

}
