import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TemplateDrivingComponent } from './template-driving/template-driving.component';
import { ReactiveDrivingComponent } from './reactive-driving/reactive-driving.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivingComponent,
    ReactiveDrivingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
