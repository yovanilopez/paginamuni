import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PagosService,Modelo } from 'src/app/pago/Services/pagos.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  
  constructor( private PagosService : PagosService, private router:Router) { }
  Modelo: Modelo= {
    
    Multa: '',
    TipoInfraccion: '',
    FechaPago: '',
    Descripcion: '',
    PagoLinea: '',
   
  }

  ngOnInit(): void {
  }
  agregar(){
  
    this.PagosService.addmodelo(this.Modelo).subscribe();
     this.router.navigate(['/listapago']);
   }

}