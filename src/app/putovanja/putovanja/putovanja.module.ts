import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PutovanjaPageRoutingModule } from './putovanja-routing.module';

import { PutovanjaPage } from './putovanja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PutovanjaPageRoutingModule
  ],
  declarations: [PutovanjaPage]
})
export class PutovanjaPageModule {}
