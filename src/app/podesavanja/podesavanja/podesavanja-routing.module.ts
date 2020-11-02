import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodesavanjaPage } from './podesavanja.page';

const routes: Routes = [
  {
    path: '',
    component: PodesavanjaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodesavanjaPageRoutingModule {}
