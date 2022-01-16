import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private _elementRef:ElementRef) { }

  //elementRef is a wrapper  around the native element
  //using this get the native element like h3 in html
  //applying styling
  ngOnInit(): void {
   this._elementRef.nativeElement.style.color='green';
   this._elementRef.nativeElement.style.textTransform='uppercase';
  }

}


//  for perticular style we implements onInit......we r writing private _elementRef :ElemnetRef its means that it is the duty of 
// angular to create an automatic object for that perticular object, like this its creating=>public _elementRef:ElementRef;