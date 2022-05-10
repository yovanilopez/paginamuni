import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { VehiculolistaComponent } from './vehiculo/COMPONENTES/vehiculolista/vehiculolista.component';

import { VehiculomdifComponent } from './vehiculo/COMPONENTES/vehiculomdif/vehiculomdif.component';
import { HttpClientModule } from '@angular/common/http';
import { EvidenciaComponent } from './evidencia/evidencia.component';
import { EvidencialistaComponent } from './evidencia/COMPONENTES/evidencialista/evidencialista.component';
import { EvidenciamodifComponent } from './evidencia/COMPONENTES/evidenciamodif/evidenciamodif.component';
import { PagoComponent } from './pago/pago.component';
import { PagolistaComponent } from './pago/COMPONENTES/pagolista/pagolista.component';
import { PagomodifComponent } from './pago/COMPONENTES/pagomodif/pagomodif.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonalistaComponent } from './persona/COMPONENTES/personalista/personalista.component';
import { PersonamodifComponent } from './persona/COMPONENTES/personamodif/personamodif.component';
import { RevisionComponent } from './revision/revision.component';
import { RevisionlistaComponent } from './revision/COMPONENTES/revisionlista/revisionlista.component';
import { RevisionmodifComponent } from './revision/COMPONENTES/revisionmodif/revisionmodif.component';

@NgModule({
  declarations: [
    AppComponent,
   
    NavComponent,
        BienvenidaComponent,
        VehiculoComponent,
        VehiculolistaComponent,
        VehiculomdifComponent,
        EvidenciaComponent,
        EvidencialistaComponent,
        EvidenciamodifComponent,
        PagoComponent,
        PagolistaComponent,
        PagomodifComponent,
        PersonaComponent,
        PersonalistaComponent,
        PersonamodifComponent,
        RevisionComponent,
        RevisionlistaComponent,
        RevisionmodifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
