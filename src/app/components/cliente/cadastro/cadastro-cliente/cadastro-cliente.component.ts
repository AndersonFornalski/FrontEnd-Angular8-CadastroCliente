import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/components/services/cliente.service';
import { Cliente } from 'src/app/components/model/cliente.model';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente: Cliente = new Cliente;

  constructor(private clienteservice: ClienteService) { }

  ngOnInit() {
  }

  saveCliente(){
    this.clienteservice.salvarCliente(this.cliente)
      .subscribe(data=>{
        console.log(data)        
      }) 
  }

}
