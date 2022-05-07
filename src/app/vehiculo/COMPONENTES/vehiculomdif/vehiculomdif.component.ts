import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Modelo,VehiculosService } from './../../Services/vehiculos.service';


@Component({
  selector: 'app-vehiculomdif',
  templateUrl: './vehiculomdif.component.html',
  styleUrls: ['./vehiculomdif.component.css']
})
export class VehiculomdifComponent implements OnInit {

  Modelo: Modelo= {
    IdVehiculo: '',
    NumeroVehiculo: '',
    NumeroPlaca: '',
    Color: '',
    NumeroLinea: '',
    IdPersona: '',
    IdEvidencias: '',
    IdPagos: '',
    IdRevision: '',
    IdTurno :'',
  }



  constructor( private VehiculosService: VehiculosService , private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada =  <string>this.ActiveRoute.snapshot.params['id'];

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.VehiculosService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }
  }
  modificar() {
    this.VehiculosService.editmodelo(this.Modelo.NumeroPlaca, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['listavehiculo'])
  }
}