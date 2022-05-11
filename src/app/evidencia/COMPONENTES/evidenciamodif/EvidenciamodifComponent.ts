import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Modelo,EvidenciasService } from './../../Services/evidencias.service';



@Component({
  selector: 'app-evidenciamodif',
  templateUrl: './evidenciamodif.component.html',
  styleUrls: ['./evidenciamodif.component.css']
})
export class EvidenciamodifComponent implements OnInit {

  Modelo: Modelo = {
    Evidencia: '',
    NumeroVehiculo: ''
  };



  constructor( private EvidenciasService: EvidenciasService, private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada =  <string>this.ActiveRoute.snapshot.params['id'];

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.EvidenciasService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }
  }
  modificar() {
    this.EvidenciasService.editmodelo(this.Modelo.IdEvidencias, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['listaevidencia'])
  }
}