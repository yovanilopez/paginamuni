import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user={

    userName: 'yovani',
    pasword: '1234'


  }
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }
  

  logIn (){
    console.log(this.user);
    this.authService.singin(this.user).subscribe ( (res: any )=>{
    console.log(res);
    localStorage.setItem ('token',res.token);
    })
  }

}