import { HttpClient } from '@angular/common/http';
import { Token} from '@angular/compiler';
import { Injectable } from '@angular/core';
import { JwtHelperService, } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private URL ="http://localhost:3000/usuarios"
  constructor(
    private http:HttpClient,
    private jwtHelper: JwtHelperService) { }

  singin(user:any){
   
 // return this.http.post('${this.URL}/usuarios',user);
  //return this.http.post( '${this.URL}/',user);
  return this.http.post(this.URL,user);
  }
  
    
isAuth():boolean{
  
  const token =localStorage.getItem(('token'));
  if(this.jwtHelper.isTokenExpired() || !localStorage.getItem('token')){
   return false;
 }
 return true;
}


}
