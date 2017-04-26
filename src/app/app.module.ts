import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTER_MODULE } from './app.router-module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './interfaces/tela-inicial/tela-inicial.component';
import { GeradorDeSequenciasComponent } from './interfaces/gerador-de-sequencias/gerador-de-sequencias.component';
import { MovimentoRepositoryService } from "./domain/movimento-repository.service";

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    GeradorDeSequenciasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTER_MODULE
  ],
  providers: [
    MovimentoRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
