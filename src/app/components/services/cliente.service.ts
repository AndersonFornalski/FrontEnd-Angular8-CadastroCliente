import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

   private apiUrl = "https://spring-projeto-cadastro.herokuapp.com/cliente"
  

  listarClientes(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);     
  }

  salvarCliente(cliente: Cliente):Observable<any>{
    return this.http.post(`${this.apiUrl}`,cliente);
  }
  
  excluirCliente(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
