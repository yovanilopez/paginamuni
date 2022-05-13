import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { EvidencialistaComponent } from './evidencia/COMPONENTES/evidencialista/evidencialista.component';
import { EvidenciamodifComponent } from './evidencia/COMPONENTES/evidenciamodif/EvidenciamodifComponent';
import { EvidenciaComponent } from './evidencia/evidencia.component';
import { PagolistaComponent } from './pago/COMPONENTES/pagolista/pagolista.component';
import { PagomodifComponent } from './pago/COMPONENTES/pagomodif/pagomodif.component';
import { PagoComponent } from './pago/pago.component';
import { PersonalistaComponent } from './persona/COMPONENTES/personalista/personalista.component';
import { PersonamodifComponent } from './persona/COMPONENTES/personamodif/personamodif.component';
import { PersonaComponent } from './persona/persona.component';
import { RevisionlistaComponent } from './revision/COMPONENTES/revisionlista/revisionlista.component';
import { RevisionmodifComponent } from './revision/COMPONENTES/revisionmodif/revisionmodif.component';
import { RevisionComponent } from './revision/revision.component';
import { TurnolistaComponent } from './tuno/COMPONENTES/turnolista/turnolista.component';
import { TurnomodifComponent } from './tuno/COMPONENTES/turnomodif/turnomodif.component';
import { TunoComponent } from './tuno/tuno.component';
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
  {path: 'modificarevidencia/:id',component:EvidenciamodifComponent},
  {path: 'agregarevidencia',component:EvidenciaComponent},


  //pagos 
  {path: 'listapago',component:PagolistaComponent},
  {path: 'modificarpago/:id',component:PagomodifComponent},
  {path: 'agregarpago',component:PagoComponent},

  //persona
  {path: 'listapersona',component:PersonalistaComponent},
  {path: 'modificarpersona/:id',component:PersonamodifComponent},
  {path: 'agregarpersona',component:PersonaComponent},

  // revision
  {path: 'listarevision',component:RevisionlistaComponent},
  {path: 'modificarrevision/:id',component:RevisionmodifComponent},
  {path: 'agregarrevision',component:RevisionComponent},
  //turno
  {path: 'listarturno',component:TurnolistaComponent},
  {path: 'modificarturno/:id',component:TurnomodifComponent},
  {path: 'agregarturno',component:TunoComponent},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
