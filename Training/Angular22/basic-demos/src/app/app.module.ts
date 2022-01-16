import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TempInlineComponent } from './temp-inline/temp-inline.component';
import { StrDirectivesComponent } from './str-directives/str-directives.component';
import { StrDirectComponent } from './str-direct/str-direct.component';
import { AttrDirectComponent } from './attr-direct/attr-direct.component';
import { PipeInbuiltComponent } from './pipe-inbuilt/pipe-inbuilt.component';
import { DesignPipe } from './pipes/design.pipe';
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';
import { TitlesPipe } from './pipes/titles.pipe';
import { TimePipe } from './pipes/time.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BasicHighlightDirective } from './directives/attr/basic-highlight.directive';
import { CustomDirectComponent } from './custom-direct/custom-direct.component';
import { RenderHighlightDirective } from './directives/attr/render-highlight.directive';
import { HostHighlightDirective } from './directives/attr/host-highlight.directive';
import { HostbindHighlightDirective } from './directives/attr/hostbind-highlight.directive';
import { NotifDirective } from './directives/struct/notif.directive';
import { NumberloopDirective } from './directives/struct/numberloop.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    TempInlineComponent,
    StrDirectivesComponent,
    StrDirectComponent,
    AttrDirectComponent,
    PipeInbuiltComponent,
    DesignPipe,
    PipeCustomComponent,
    TitlesPipe,
    TimePipe,
    ReversePipe,
    FilterPipe,
    ParentComponent,
    ChildComponent,
    BasicHighlightDirective,
    CustomDirectComponent,
    RenderHighlightDirective,
    HostHighlightDirective,
    HostbindHighlightDirective,
    NotifDirective,
    NumberloopDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
