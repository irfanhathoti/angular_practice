import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parentChild/parent/parent.component';
import { ChildComponent } from './parentChild/child/child.component';
import { TempleteFormComponent } from './templete-form/templete-form.component';
import { FormsModule } from '@angular/forms';
import { ReactivFormComponent } from './reactiv-form/reactiv-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsPdfComponent } from './js-pdf/js-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TempleteFormComponent,
    ReactivFormComponent,
    JsPdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
