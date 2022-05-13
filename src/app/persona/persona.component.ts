import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PersonasService,Modelo } from 'src/app/persona/Services/personas.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  
  constructor( private PersonasService : PersonasService, private router:Router) { }
  Modelo: Modelo= {
    IdPersona: '',
    Nit: '',
    Nombre: '',
    Apellido: '',
    Edad: '',
    Direccion: '',
    Telefono: '',
    NumeroVehiculo: '',

  }
  ngOnInit(): void {
  }
  agregar(){
  
    this.PersonasService.addmodelo(this.Modelo).subscribe();
     this.router.navigate(['/listapersona']);
   }


}
