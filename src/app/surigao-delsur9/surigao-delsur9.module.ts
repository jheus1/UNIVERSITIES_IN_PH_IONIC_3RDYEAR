import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelsur9PageRoutingModule } from './surigao-delsur9-routing.module';

import { SurigaoDelsur9Page } from './surigao-delsur9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelsur9PageRoutingModule
  ],
  declarations: [SurigaoDelsur9Page]
})
export class SurigaoDelsur9PageModule {}
