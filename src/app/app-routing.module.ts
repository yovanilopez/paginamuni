import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { EvidencialistaComponent } from './evidencia/COMPONENTES/evidencialista/evidencialista.component';
import { PagolistaComponent } from './pago/COMPONENTES/pagolista/pagolista.component';
import { PersonalistaComponent } from './persona/COMPONENTES/personalista/personalista.component';
import { RevisionlistaComponent } from './revision/COMPONENTES/revisionlista/revisionlista.component';
import { VehiculolistaComponent } from './vehiculo/COMPONENTES/vehiculolista/vehiculolista.component';
import { VehiculomdifComponent } from './vehiculo/COMPONENTES/vehiculomdif/vehiculomdif.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';

const routes: Routes = [
  {path: '',component:BienvenidaComponent},

  //vehiculo
  {path: 'listavehiculo',component:VehiculolistaComponent},
  {path: 'modificarvehiculo/:id',component:VehiculomdifComponent},
  {path: 'agregarvehiculo',component:VehiculoComponent},


   // evidencia
  {path: 'listaevidencia',component:EvidencialistaComponent},


  //pagos 
  {path: 'listapago',component:PagolistaComponent},

  //persona
  {path: 'listapersona',component:PersonalistaComponent},

  // revision
  {path: 'listarevision',component:RevisionlistaComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
