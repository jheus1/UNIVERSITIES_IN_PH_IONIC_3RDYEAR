import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelsur3PageRoutingModule } from './surigao-delsur3-routing.module';

import { SurigaoDelsur3Page } from './surigao-delsur3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelsur3PageRoutingModule
  ],
  declarations: [SurigaoDelsur3Page]
})
export class SurigaoDelsur3PageModule {}
