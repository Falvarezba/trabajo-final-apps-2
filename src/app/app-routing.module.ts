import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'categorias/:nombre',
    loadChildren: () => import('./pages/detalle-producto/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'producto/:nombre',
    loadChildren: () => import('./pages/detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },
  {
    path: 'seleccionar-auto',
    loadChildren: () => import('./pages/seleccionar-auto/seleccionar-auto.module').then( m => m.SeleccionarAutoPageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


