import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VistauserService, Modelo} from './../../Services/vistauser.service';
import * as printJS from 'print-js';
import { CdkColumnDef, TEXT_COLUMN_OPTIONS } from '@angular/cdk/table';


@Component({
  selector: 'app-listauser',
  templateUrl: './listauser.component.html',
  styleUrls: ['./listauser.component.css']
})
export class ListauserComponent implements OnInit {

  ListarModelos!: Modelo[];

  teamJSON: JSON | undefined;
  constructor(  private   VistauserService: VistauserService, private router:Router) { }


  ngOnInit(): void {
    this.listarmodelos();
  }
  
  listarmodelos(){
    this.VistauserService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
        this.teamJSON =<any>res;
   
      },
      err=> console.log(err)
     

    );
  }
  
 print(IdVehiculo:string){

   printJS({printable: this.teamJSON, properties: ['NumeroPlaca', 'IdVehiculo', 'Nombre','multa'], type: 'json' , gridHeaderStyle: 'color: red;  border: 1px solid #3971A5;',
  gridStyle: 'border: 1px solid #3971A5;'})


  }





  

 

  
  

  
  
}
