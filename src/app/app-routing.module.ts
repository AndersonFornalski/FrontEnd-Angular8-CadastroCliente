import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaClienteComponent } from './components/cliente/cadastro/lista-cliente/lista-cliente.component';
import { CadastroClienteComponent } from './components/cliente/cadastro/cadastro-cliente/cadastro-cliente.component';


const routes: Routes = [
  {path:"lista", component: ListaClienteComponent},
  {path:"cadastro", component: CadastroClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
