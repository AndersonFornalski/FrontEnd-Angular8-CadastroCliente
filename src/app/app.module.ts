import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/header/headers/headers.component';
import { CadastroClienteComponent } from './components/cliente/cadastro/cadastro-cliente/cadastro-cliente.component';
import { ListaClienteComponent } from './components/cliente/cadastro/lista-cliente/lista-cliente.component';
import { ClienteService } from './components/services/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    CadastroClienteComponent,
    ListaClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
