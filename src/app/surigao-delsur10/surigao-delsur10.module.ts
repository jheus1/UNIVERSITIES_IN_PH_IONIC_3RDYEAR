import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelsur10PageRoutingModule } from './surigao-delsur10-routing.module';

import { SurigaoDelsur10Page } from './surigao-delsur10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelsur10PageRoutingModule
  ],
  declarations: [SurigaoDelsur10Page]
})
export class SurigaoDelsur10PageModule {}
