import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Modelo,TurnosService } from './../../Services/turnos.service';


@Component({
  selector: 'app-turnomodif',
  templateUrl: './turnomodif.component.html',
  styleUrls: ['./turnomodif.component.css']
})
export class TurnomodifComponent implements OnInit {

  Modelo: Modelo= {
    FechaInicio: '',
    FechaFin: '',
    NumeroTurno: '',
  
   
  }

  constructor( private TurnosService: TurnosService , private router:Router, private ActiveRoute:ActivatedRoute) { }


  
  ngOnInit(): void {

    const id_entrada =  <string>this.ActiveRoute.snapshot.params['id'];

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.TurnosService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }
  }
  modificar() {
    this.TurnosService.editmodelo(this.Modelo.IdTurno, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['listarturno'])
  }
}