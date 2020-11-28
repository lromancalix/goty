import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficosBarraHorizontalComponent } from './graficos-barra-horizontal/graficos-barra-horizontal.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavbarComponent,
    GraficosBarraHorizontalComponent
  ],
  exports: [
    NavbarComponent,
    GraficosBarraHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
