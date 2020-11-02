import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'putovanja',
    pathMatch: 'full'
  },
  {
    path: 'putovanja',
    loadChildren: () => import('./putovanja/putovanja/putovanja.module').then( m => m.PutovanjaPageModule)
  },
  {
    path: 'podesavanja',
    loadChildren: () => import('./podesavanja/podesavanja/podesavanja.module').then( m => m.PodesavanjaPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'zemlje',
    loadChildren: () => import('./zemlje/zemlje/zemlje.module').then( m => m.ZemljePageModule)
  },
  {
    path: 'putovanje',
    loadChildren: () => import('./putovanja/putovanje/putovanje/putovanje.module').then( m => m.PutovanjePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
