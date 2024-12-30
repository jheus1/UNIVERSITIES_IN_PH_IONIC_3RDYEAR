import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelsur6PageRoutingModule } from './surigao-delsur6-routing.module';

import { SurigaoDelsur6Page } from './surigao-delsur6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelsur6PageRoutingModule
  ],
  declarations: [SurigaoDelsur6Page]
})
export class SurigaoDelsur6PageModule {}
