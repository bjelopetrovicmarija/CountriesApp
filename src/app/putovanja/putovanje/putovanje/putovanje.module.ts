import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PutovanjePageRoutingModule } from './putovanje-routing.module';

import { PutovanjePage } from './putovanje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PutovanjePageRoutingModule
  ],
  declarations: [PutovanjePage]
})
export class PutovanjePageModule {}
