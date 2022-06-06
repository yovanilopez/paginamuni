import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RevisionesService, Modelo} from './../../Services/revisiones.service';
@Component({
  selector: 'app-revisionlista',
  templateUrl: './revisionlista.component.html',
  styleUrls: ['./revisionlista.component.css']
})
export class RevisionlistaComponent implements OnInit {

  ListarModelos!: Modelo[];
  constructor(  private  RevisionesService: RevisionesService, private router:Router) { }

 
  ngOnInit(): void {
    this.listarmodelos();
  }
  
  listarmodelos(){
    this.RevisionesService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminar(IdRevision:string){
    this.RevisionesService.eliminarmodelo(IdRevision).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        


      },
      err=> console.log(err));
  }


  modificar(IdRevision:string){
    this.router.navigate(['/modificarrevision/'+IdRevision])
  }




  Onnuevo(){
    this.router.navigate(["agregarrevision"])
    }
  

    retornar(){
      this.router.navigate(["private"])
      }
    
  
}

