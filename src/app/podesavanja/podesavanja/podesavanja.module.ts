import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodesavanjaPageRoutingModule } from './podesavanja-routing.module';

import { PodesavanjaPage } from './podesavanja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodesavanjaPageRoutingModule
  ],
  declarations: [PodesavanjaPage]
})
export class PodesavanjaPageModule {}
