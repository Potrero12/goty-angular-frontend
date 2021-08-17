import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarraHorizontalComponent
  ],
  exports: [
    NavbarComponent, 
    GraficoBarraHorizontalComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    NgxChartsModule,
    RouterModule,
    FormsModule
  ]
})
export class ComponentsModule { }
