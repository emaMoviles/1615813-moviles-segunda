import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarCarritoPageRoutingModule } from './agregar-carrito-routing.module';

import { AgregarCarritoPage } from './agregar-carrito.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarCarritoPageRoutingModule
  ],
  declarations: [AgregarCarritoPage]
})
export class AgregarCarritoPageModule {}
