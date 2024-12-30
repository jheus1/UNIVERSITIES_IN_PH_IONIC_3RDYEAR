import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelsur7PageRoutingModule } from './surigao-delsur7-routing.module';

import { SurigaoDelsur7Page } from './surigao-delsur7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelsur7PageRoutingModule
  ],
  declarations: [SurigaoDelsur7Page]
})
export class SurigaoDelsur7PageModule {}
