import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  url="http://localhost:3000/persona"
  constructor( private http:HttpClient) { }

  getModelos(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunmodelo(IdPersona:string){
    return this.http.get(this.url+'/'+IdPersona);
  }

  //Crear
  addmodelo(modelo:Modelo){
    return this.http.post(this.url,modelo);

  }

  //eliminar
  eliminarmodelo(IdPersona:string){
    return this.http.delete(this.url+'/'+IdPersona);
  }

  //modificar
  editmodelo(IdPersona:string, modelo:Modelo){
    return this.http.put(this.url+'/'+IdPersona,modelo);

  }
}
export interface Modelo {

  IdPersona?: any; 
  Nit:string;
  Nombre:string;
  Apellido:string;
  Edad:string;
  Direccion:string;
  Telefono:string;
  NumeroVehiculo:string;
  
 
}
