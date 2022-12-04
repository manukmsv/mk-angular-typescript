import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { AppRoutingModule, AppsComponent } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, AppsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
