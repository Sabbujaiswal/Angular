import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNumberloop]'
})
export class NumberloopDirective {
  @Input() set appNumberloop(loop:number){
    for(let i=0;i<loop;i++){
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
  }

  constructor(private _templateRef:TemplateRef<any>,private _viewContainerRef:ViewContainerRef) { }

}
