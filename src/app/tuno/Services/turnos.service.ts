import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  url="http://localhost:3000/turno"
  constructor( private http:HttpClient) { }


  getModelos(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunmodelo(IdTurno:string){
    return this.http.get(this.url+'/'+IdTurno);
  }

  //Crear
  addmodelo(modelo:Modelo){
    return this.http.post(this.url,modelo);

  }

  //eliminar
  eliminarmodelo(IdTurno:string){
    return this.http.delete(this.url+'/'+IdTurno);
  }

  //modificar
  editmodelo(IdTurno:string, modelo:Modelo){
    return this.http.put(this.url+'/'+IdTurno,modelo);

  }
}
export interface Modelo {

  IdTurno ?:any;
  FechaInicio: string;
  FechaFin: any;
  NumeroTurno: string;
 
 
}

