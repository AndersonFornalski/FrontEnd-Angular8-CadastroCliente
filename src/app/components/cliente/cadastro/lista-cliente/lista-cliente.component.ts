import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/components/model/cliente.model';
import { ClienteService } from 'src/app/components/services/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  clientes: Cliente[];
  cliente: Cliente;

  constructor(private clienteService:ClienteService) { }

  ngOnInit() {    
    this.clienteService.listarClientes()
      .subscribe(data =>{
        console.log(data)
        this.clientes = data        
      })    
  }

  deleteCliente(id: number){
    this.clienteService.excluirCliente(id)
      .subscribe(data=>{
        console.log(data)
        

      })
  }

 

}
