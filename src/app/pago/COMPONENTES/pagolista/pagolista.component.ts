import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagosService, Modelo} from './../../Services/pagos.service';


@Component({
  selector: 'app-pagolista',
  templateUrl: './pagolista.component.html',
  styleUrls: ['./pagolista.component.css']
})
export class PagolistaComponent implements OnInit {

  ListarModelos!: Modelo[];
  constructor(  private   PagosService: PagosService, private router:Router) { }




  ngOnInit(): void {
    this.listarmodelos();
  }
  
  listarmodelos(){
    this.PagosService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminar(IdPagos:string){
    this.PagosService.eliminarmodelo(IdPagos).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        


      },
      err=> console.log(err));
  }


  modificar(NumeroPlaca:string){
    this.router.navigate(['/modificarpago/'+NumeroPlaca])
  }

  Onnuevo(){
    this.router.navigate(["agregarpago"])
    }

    retornar(){
      this.router.navigate(["private"])
      }
 
}
