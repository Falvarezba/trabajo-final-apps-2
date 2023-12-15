import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarAutoPage } from './seleccionar-auto.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarAutoPageRoutingModule {}
