import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasService, Modelo} from './../../Services/personas.service';


@Component({
  selector: 'app-personalista',
  templateUrl: './personalista.component.html',
  styleUrls: ['./personalista.component.css']
})
export class PersonalistaComponent implements OnInit {

  ListarModelos!: Modelo[];
  constructor(  private  PersonasService: PersonasService, private router:Router) { }




  ngOnInit(): void {
    this.listarmodelos();
  }
  
  listarmodelos(){
    this.PersonasService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminar(IdPersona:string){
    this.PersonasService.eliminarmodelo(IdPersona).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        


      },
      err=> console.log(err));
  }







  modificar(NumeroPlaca:string){
    this.router.navigate(['/modificarvehiculo/'+NumeroPlaca])
  }




  Onnuevo(){
    this.router.navigate(["agregarvehiculo"])
    }
  

  
  
}
