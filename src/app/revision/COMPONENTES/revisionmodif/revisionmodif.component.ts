import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Modelo,RevisionesService } from './../../Services/revisiones.service';


@Component({
  selector: 'app-revisionmodif',
  templateUrl: './revisionmodif.component.html',
  styleUrls: ['./revisionmodif.component.css']
})
export class RevisionmodifComponent implements OnInit {

  Modelo: Modelo= {
    IdRevision: '',
    Luces: '',
    Identificacion: '',
    Papeles: '',
   
  }
  constructor( private RevisionesService: RevisionesService , private router:Router, private ActiveRoute:ActivatedRoute) { }


  ngOnInit(): void {

    const id_entrada =  <string>this.ActiveRoute.snapshot.params['id'];

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.RevisionesService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }
  }
  modificar() {
    this.RevisionesService.editmodelo(this.Modelo.IdRevision, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['listarevision'])
  }
}