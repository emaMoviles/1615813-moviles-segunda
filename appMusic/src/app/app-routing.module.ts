import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./paginas/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'agregar-carrito',
    loadChildren: () => import('./paginas/agregar-carrito/agregar-carrito.module').then( m => m.AgregarCarritoPageModule)
  },

  {
    path: 'caracteristicas',
    loadChildren: () => import('./paginas/caracteristicas/caracteristicas.module').then( m => m.CaracteristicasPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./paginas/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
