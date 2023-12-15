import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarAutoPageRoutingModule } from './seleccionar-auto-routing.module';

import { SeleccionarAutoPage } from './seleccionar-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarAutoPageRoutingModule
  ],
  declarations: [SeleccionarAutoPage]
})
export class SeleccionarAutoPageModule {}
