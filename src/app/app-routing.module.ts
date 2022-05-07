import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { VehiculolistaComponent } from './vehiculo/COMPONENTES/vehiculolista/vehiculolista.component';
import { VehiculomdifComponent } from './vehiculo/COMPONENTES/vehiculomdif/vehiculomdif.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';

const routes: Routes = [
  {path: '',component:BienvenidaComponent},

  //vehiculo
  {path: 'listavehiculo',component:VehiculolistaComponent},
  {path: 'modificarvehiculo/:id',component:VehiculomdifComponent},
  {path: 'agregarvehiculo',component:VehiculoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
