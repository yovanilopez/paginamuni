import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RevisionesService,Modelo } from 'src/app/revision/Services/revisiones.service';


@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent implements OnInit {
  constructor( private RevisionesService : RevisionesService, private router:Router) { }
  Modelo: Modelo= {
    IdRevision: '',
    Luces: '',
    Identificacion: '',
    Papeles: '',
    
  }

  ngOnInit(): void {
  }
  agregar(){
  
    this.RevisionesService.addmodelo(this.Modelo).subscribe();
     this.router.navigate(['/listarevision']);
   }

}
