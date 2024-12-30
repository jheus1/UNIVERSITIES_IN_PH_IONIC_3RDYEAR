import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelsurPageRoutingModule } from './surigao-delsur-routing.module';

import { SurigaoDelsurPage } from './surigao-delsur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelsurPageRoutingModule
  ],
  declarations: [SurigaoDelsurPage]
})
export class SurigaoDelsurPageModule {}
