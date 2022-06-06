import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VistauserService {

  url="http://localhost:3000/vehiculo-persona-pagos"
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

  
  //modificar
  editmodelo(IdVehiculo:string, modelo:Modelo){
    return this.http.put(this.url+'/'+IdVehiculo,modelo);

  }
}
export interface Modelo {

  NumeroPlaca: string,
  IdVehiculo  ?: any,
  Nombre  :string,
  multa  :string,
  
}
