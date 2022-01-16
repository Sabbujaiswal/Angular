import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNotif]'
})
export class NotifDirective {

 @Input() set appNotif(condition:boolean){
   if(!condition){
   this._viewContainer.createEmbeddedView(this._template)
  }
   else{this._viewContainer.clear();


   }
 }
  constructor(private _viewContainer:ViewContainerRef,private _template:TemplateRef<any>) { }

}
