import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL ="http://localhost:3000/usuarios"
  constructor(private http:HttpClient) { }

  singin(user:any){
   
 // return this.http.post('${this.URL}/usuarios',user);
  //return this.http.post( '${this.URL}/',user);
  return this.http.post(this.URL,user);


  }
}
