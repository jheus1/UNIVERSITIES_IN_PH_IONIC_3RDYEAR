import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelnorte2PageRoutingModule } from './surigao-delnorte2-routing.module';

import { SurigaoDelnorte2Page } from './surigao-delnorte2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelnorte2PageRoutingModule
  ],
  declarations: [SurigaoDelnorte2Page]
})
export class SurigaoDelnorte2PageModule {}
