import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvidenciasService, Modelo} from './../../Services/evidencias.service';


@Component({
  selector: 'app-evidencialista',
  templateUrl: './evidencialista.component.html',
  styleUrls: ['./evidencialista.component.css']
})
export class EvidencialistaComponent implements OnInit {

  ListarModelos!: Modelo[];
  constructor( private  EvidenciasService: EvidenciasService, private router:Router) { }
  ngOnInit(): void {
    this.listarmodelos();
  }
  
  listarmodelos(){
    this.EvidenciasService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminar(IdEvidencias:string){
    this.EvidenciasService.eliminarmodelo(IdEvidencias).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        


      },
      err=> console.log(err));
  }

  modificar(IdEvidencias:string){
    this.router.navigate(['/modificarevidencia/'+IdEvidencias])
  }


  Onnuevo(){
    this.router.navigate(["agregarevidencia"])
    }
  
  
}

