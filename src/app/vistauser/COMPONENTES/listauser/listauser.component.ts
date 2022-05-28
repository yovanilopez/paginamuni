import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VistauserService, Modelo} from './../../Services/vistauser.service';


@Component({
  selector: 'app-listauser',
  templateUrl: './listauser.component.html',
  styleUrls: ['./listauser.component.css']
})
export class ListauserComponent implements OnInit {

  ListarModelos!: Modelo[];
  constructor(  private   VistauserService: VistauserService, private router:Router) { }


  ngOnInit(): void {
    this.listarmodelos();
  }
  
  listarmodelos(){
    this.VistauserService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }




  eliminar(Nit:string){
    this.VistauserService.eliminarmodelo(Nit).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        


      },
      err=> console.log(err));
  }

  modificar(Nit:string){
    this.router.navigate(['/modificarpersona/'+Nit])
  }

  Onnuevo(){
    this.router.navigate(["agregarpersona"])
    }
  

  
  
}
