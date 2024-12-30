import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelsur2PageRoutingModule } from './surigao-delsur2-routing.module';

import { SurigaoDelsur2Page } from './surigao-delsur2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelsur2PageRoutingModule
  ],
  declarations: [SurigaoDelsur2Page]
})
export class SurigaoDelsur2PageModule {}
