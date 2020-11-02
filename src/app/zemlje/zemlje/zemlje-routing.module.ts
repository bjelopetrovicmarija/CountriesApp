import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZemljePage } from './zemlje.page';

const routes: Routes = [
  {
    path: '',
    component: ZemljePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZemljePageRoutingModule {}
