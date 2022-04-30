import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {VehiculosService, } from 'src/app/vehiculo/Services/vehiculos.service';


@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
 
 
  constructor( private EstudianteService : VehiculosService, private router:Router) { }

  ngOnInit(): void {
  }
 

}
