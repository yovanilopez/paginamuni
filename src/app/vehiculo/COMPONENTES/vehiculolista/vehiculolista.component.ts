import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculosService, Modelo} from './../../Services/vehiculos.service';


@Component({
  selector: 'app-vehiculolista',
  templateUrl: './vehiculolista.component.html',
  styleUrls: ['./vehiculolista.component.css']
})
export class VehiculolistaComponent implements OnInit {


 
  ListarModelos!: Modelo[];
  constructor(  private  VehiculosService: VehiculosService, private router:Router) { }



  ngOnInit(): void {
    this.listarmodelos();
  }
  
  listarmodelos(){
    this.VehiculosService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminar(IdVehiculo:string){
    this.VehiculosService.eliminarmodelo(IdVehiculo).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        


      },
      err=> console.log(err));
  }







  modificar(IdVehiculo:string){
    this.router.navigate(['/modificarvehiculo/'+IdVehiculo])
  }




  Onnuevo(){
    this.router.navigate(["agregarvehiculo"])
    }
  

  
  
}
