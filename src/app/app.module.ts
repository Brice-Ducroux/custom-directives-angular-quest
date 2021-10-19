import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MoovieListDirective } from './moovie-list.directive';
import { NewStyleDirective } from './new-style.directive';

@NgModule({
  declarations: [AppComponent, MoovieListDirective, NewStyleDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
