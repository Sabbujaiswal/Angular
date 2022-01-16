import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})
export class RenderHighlightDirective implements OnInit {

  // elementRef helps to get the element to which this directive is applied 
  //renderer help to intercept the default behaviour and set style /class/attribute 

  constructor(private _elementRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this._elementRef.nativeElement,'color','pink');
    this.renderer.setStyle(this._elementRef.nativeElement,'letter-Spacing','5px');
    this.renderer.addClass(this._elementRef.nativeElement,'myclass');
  }

}


