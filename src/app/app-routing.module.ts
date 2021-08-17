import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GotyComponent } from './pages/goty/goty.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent, data: {title: 'Inico'}},
  {path: 'goty', component: GotyComponent, data: {title: 'Juego Del Año'}},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
