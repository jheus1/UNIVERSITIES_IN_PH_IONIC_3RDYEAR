import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelsur4PageRoutingModule } from './surigao-delsur4-routing.module';

import { SurigaoDelsur4Page } from './surigao-delsur4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelsur4PageRoutingModule
  ],
  declarations: [SurigaoDelsur4Page]
})
export class SurigaoDelsur4PageModule {}
