import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTER_MODULE } from './app.router-module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './interfaces/tela-inicial/tela-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTER_MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
