import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TurnosService, Modelo} from './../../Services/turnos.service';

@Component({
  selector: 'app-turnolista',
  templateUrl: './turnolista.component.html',
  styleUrls: ['./turnolista.component.css']
})
export class TurnolistaComponent implements OnInit {


  ListarModelos!: Modelo[];
  constructor(  private   TurnosService: TurnosService, private router:Router) { }


  ngOnInit(): void {
    this.listarmodelos();
  }
  
  listarmodelos(){
    this.TurnosService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminar(IdTurno:string){
    this.TurnosService.eliminarmodelo(IdTurno).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        


      },
      err=> console.log(err));
  }







  modificar(IdTurno:string){
    this.router.navigate(['/modificarturno/'+IdTurno])
  }




  Onnuevo(){
    this.router.navigate(["agregarturno"])
    }
  

  
  
}
