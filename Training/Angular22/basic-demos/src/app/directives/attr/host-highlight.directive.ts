import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostHighlight]'
})
export class HostHighlightDirective implements OnInit{

  constructor(private _elementRef:ElementRef,private _renderer:Renderer2) { }
  ngOnInit(): void {
   this._renderer.setStyle(this._elementRef.nativeElement,'background-color','pink');
   this._renderer.setStyle(this._elementRef.nativeElement,'letter-spacing','10px');
   
  }
  @HostListener('mouseenter')
  //the method that will be called when the event mouse enter occurs
 mouseEnter(event:Event){
   console.log('mouse enter event')
   this._renderer.setStyle(this._elementRef.nativeElement,'background-color','yellow');
   this._renderer.setStyle(this._elementRef.nativeElement,'letter-spacing','5px');
   this._renderer.addClass(this._elementRef.nativeElement,'myclass');
 }
 @HostListener('mouseleave')
 mouseExit(event:Event){
   console.log('mouse exit happened');
   this._renderer.setStyle(this._elementRef.nativeElement,'background-color','red');
   this._renderer.setStyle(this._elementRef.nativeElement,'letter-spacing','0px');
   this._renderer.removeClass(this._elementRef.nativeElement,'myclass');
 }
}
