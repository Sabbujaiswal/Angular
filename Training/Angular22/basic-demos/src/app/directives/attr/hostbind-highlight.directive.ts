import { Directive, Input, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostbindHighlight]'
})
export class HostbindHighlightDirective implements OnInit {
@Input()defaultColor=''
@Input()highlightColor=''
@Input()textStyle=''
 @Input()bgCOlor=''

@HostBinding('style.color')basicColor='';
@HostBinding('style.backgroundColor')backgroundColor='';
@HostBinding('style.textTransform')changeText='';


  constructor() { }
  ngOnInit(): void {
    this.basicColor=this.defaultColor
    this.changeText=this.textStyle
    this.backgroundColor=this.bgCOlor
   
  }
  @HostListener('mouseenter')
  //the method that will be called when the event mouse enter occurs
 mouseEnter(event:Event){
   this.basicColor=this.highlightColor;
   this.changeText='lowecase';
   this.backgroundColor=this.defaultColor
  
 }
 @HostListener('mouseleave')
 mouseExit(event:Event){
   this.basicColor=this.defaultColor
   this.changeText=this.textStyle
   this.backgroundColor=this.highlightColor
  
 }
}


