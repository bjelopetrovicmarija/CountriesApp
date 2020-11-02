import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutovanjaPage } from './putovanja.page';

const routes: Routes = [
  {
    path: '',
    component: PutovanjaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PutovanjaPageRoutingModule {}
