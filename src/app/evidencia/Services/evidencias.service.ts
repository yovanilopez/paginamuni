import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class EvidenciasService {
  url="http://localhost:3000/evidencias"
  constructor( private http:HttpClient) { }

  getModelos(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunmodelo(IdEvidencias:string){
    return this.http.get(this.url+'/'+IdEvidencias);
  }

  //Crear
  addmodelo(modelo:Modelo){
    return this.http.post(this.url,modelo);

  }

  //eliminar
  eliminarmodelo(IdEvidencias:string){
    return this.http.delete(this.url+'/'+IdEvidencias);
  }

  //modificar
  editmodelo(IdEvidencias:string, modelo:Modelo){
    return this.http.put(this.url+'/'+IdEvidencias,modelo);

  }
}
export interface Modelo {

  IdEvidencias? :any;
  Evidencia: string ;
  NumeroVehiculo: string;
  
}
