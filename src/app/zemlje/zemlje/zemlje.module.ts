import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZemljePageRoutingModule } from './zemlje-routing.module';

import { ZemljePage } from './zemlje.page';
import {CountryCardComponent} from '../../components/country-card/country-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZemljePageRoutingModule
  ],
    declarations: [ZemljePage, CountryCardComponent]
})
export class ZemljePageModule {}
