import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelsur8PageRoutingModule } from './surigao-delsur8-routing.module';

import { SurigaoDelsur8Page } from './surigao-delsur8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelsur8PageRoutingModule
  ],
  declarations: [SurigaoDelsur8Page]
})
export class SurigaoDelsur8PageModule {}
