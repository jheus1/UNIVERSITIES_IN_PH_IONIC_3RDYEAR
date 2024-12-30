import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelsur1PageRoutingModule } from './surigao-delsur1-routing.module';

import { SurigaoDelsur1Page } from './surigao-delsur1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelsur1PageRoutingModule
  ],
  declarations: [SurigaoDelsur1Page]
})
export class SurigaoDelsur1PageModule {}
