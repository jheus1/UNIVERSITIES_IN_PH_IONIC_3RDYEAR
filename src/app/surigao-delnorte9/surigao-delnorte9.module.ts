import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelnorte9PageRoutingModule } from './surigao-delnorte9-routing.module';

import { SurigaoDelnorte9Page } from './surigao-delnorte9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelnorte9PageRoutingModule
  ],
  declarations: [SurigaoDelnorte9Page]
})
export class SurigaoDelnorte9PageModule {}
