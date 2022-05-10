import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RevisionesService {
  url="http://localhost:3000/revision"
  constructor( private http:HttpClient) { }

  getModelos(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunmodelo(IdRevision:string){
    return this.http.get(this.url+'/'+IdRevision);
  }

  //Crear
  addmodelo(modelo:Modelo){
    return this.http.post(this.url,modelo);

  }

  //eliminar
  eliminarmodelo(IdRevision:string){
    return this.http.delete(this.url+'/'+IdRevision);
  }

  //modificar
  editmodelo(IdRevision:string, modelo:Modelo){
    return this.http.put(this.url+'/'+IdRevision,modelo);

  }
}
export interface Modelo {

  IdRevision?:any;
  Luces: string;
  Identificacion: any;
  Papeles: string;
 
}
