import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TurnosService,Modelo } from 'src/app/tuno/Services/turnos.service';

@Component({
  selector: 'app-tuno',
  templateUrl: './tuno.component.html',
  styleUrls: ['./tuno.component.css']
})
export class TunoComponent implements OnInit{
  constructor ( private TurnosService : TurnosService, private router:Router) { }
  Modelo: Modelo= {
    IdTurno: '',
    FechaInicio: '',
    FechaFin: '',
    NumeroTurno: ''
  }
  ngOnInit(): void {
    
  }
  agregar(){
  
    this.TurnosService.addmodelo(this.Modelo).subscribe();
     this.router.navigate(['/listarturno']);
   }

}
