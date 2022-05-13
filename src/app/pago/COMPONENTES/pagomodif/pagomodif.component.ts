import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Modelo,PagosService } from './../../Services/pagos.service';


@Component({
  selector: 'app-pagomodif',
  templateUrl: './pagomodif.component.html',
  styleUrls: ['./pagomodif.component.css']
})
export class PagomodifComponent implements OnInit {
  
  Modelo: Modelo= {
   
    Multa: '',
    TipoInfraccion: '',
    FechaPago: '',
    Descripcion: '',
    PagoLinea: '',
    
  }
 

  constructor( private PagosService: PagosService , private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada =  <string>this.ActiveRoute.snapshot.params['id'];

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.PagosService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }
  }
  modificar() {
    this.PagosService.editmodelo(this.Modelo.IdPagos, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['listapago'])
  }
}