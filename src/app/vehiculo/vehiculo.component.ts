import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {VehiculosService,Modelo } from 'src/app/vehiculo/Services/vehiculos.service';


@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
 
 
  constructor( private EstudianteService : VehiculosService, private router:Router) { }
  Modelo: Modelo= {
    IdVehiculo: '',
    NumeroVehiculo: '',
    Color: '',
    NumeroLinea: '',
    IdPersona: '',
    IdEvidencias: '',
    IdPagos: '',
    IdRevision: '',
    IdTurno: ''
  }
  ngOnInit(): void {
  }
  agregar(){
  
    this.EstudianteService.addmodelo(this.Modelo).subscribe();
     this.router.navigate(['/listavehiculo']);
   }

}