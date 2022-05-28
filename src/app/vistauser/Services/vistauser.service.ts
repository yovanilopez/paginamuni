import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VistauserService {

  url="http://localhost:3000/tablamultas"
  constructor( private http:HttpClient) { }

  getModelos(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunmodelo(IdPagos:string){
    return this.http.get(this.url+'/'+IdPagos);
  }

  //Crear
  addmodelo(modelo:Modelo){
    return this.http.post(this.url,modelo);

  }

  //eliminar
  eliminarmodelo(IdPagos:string){
    return this.http.delete(this.url+'/'+IdPagos);
  }

  //modificar
  editmodelo(IdPagos:string, modelo:Modelo){
    return this.http.put(this.url+'/'+IdPagos,modelo);

  }
}
export interface Modelo {

  NumeroPlaca: String,
  IdVehiculo: String,
  Nombre  :String,
  multa  :String,
  
}
