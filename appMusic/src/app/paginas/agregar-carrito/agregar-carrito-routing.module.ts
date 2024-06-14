import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarCarritoPage } from './agregar-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarCarritoPageRoutingModule {}
