import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EvidenciasService,Modelo } from 'src/app/evidencia/Services/evidencias.service';
@Component({
  selector: 'app-evidencia',
  templateUrl: './evidencia.component.html',
  styleUrls: ['./evidencia.component.css']
})
export class EvidenciaComponent implements OnInit {

  constructor( private  EvidenciasService: EvidenciasService, private router:Router) { }
  Modelo: Modelo= {
    Evidencia: '',
    NumeroVehiculo: '',
   
  }

  ngOnInit(): void {
  }
  agregar(){
  
    this.EvidenciasService.addmodelo(this.Modelo).subscribe();
     this.router.navigate(['/listaevidencia']);
   }

}