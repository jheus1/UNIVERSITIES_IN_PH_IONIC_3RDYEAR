import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelnorte1PageRoutingModule } from './surigao-delnorte1-routing.module';

import { SurigaoDelnorte1Page } from './surigao-delnorte1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelnorte1PageRoutingModule
  ],
  declarations: [SurigaoDelnorte1Page]
})
export class SurigaoDelnorte1PageModule {}
