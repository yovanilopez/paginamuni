import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Modelo,PersonasService } from './../../Services/personas.service';

@Component({
  selector: 'app-personamodif',
  templateUrl: './personamodif.component.html',
  styleUrls: ['./personamodif.component.css']
})
export class PersonamodifComponent implements OnInit {
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


  constructor( private PersonasService : PersonasService  , private router:Router, private ActiveRoute:ActivatedRoute) { }


  
  ngOnInit(): void {

    const id_entrada =  <string>this.ActiveRoute.snapshot.params['id'];

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.PersonasService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }
  }
  modificar() {
    this.PersonasService.editmodelo(this.Modelo.Nit, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['listapersona'])
  }

}
