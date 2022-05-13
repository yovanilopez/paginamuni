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
  getunmodelo(Nit:string){
    return this.http.get(this.url+'/'+Nit);
  }

  //Crear
  addmodelo(modelo:Modelo){
    return this.http.post(this.url,modelo);

  }

  //eliminar
  eliminarmodelo(Nit:string){
    return this.http.delete(this.url+'/'+Nit);
  }

  //modificar
  editmodelo(Nit:string, modelo:Modelo){
    return this.http.put(this.url+'/'+Nit,modelo);

  }
}
export interface Modelo {

  IdPersona:string; 
  Nit?:any;
  Nombre:string;
  Apellido:string;
  Edad:string;
  Direccion:string;
  Telefono:string;
  NumeroVehiculo:string;
  
 
}
