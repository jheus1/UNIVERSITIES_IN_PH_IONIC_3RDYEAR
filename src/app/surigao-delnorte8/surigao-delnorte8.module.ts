import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelnorte8PageRoutingModule } from './surigao-delnorte8-routing.module';

import { SurigaoDelnorte8Page } from './surigao-delnorte8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelnorte8PageRoutingModule
  ],
  declarations: [SurigaoDelnorte8Page]
})
export class SurigaoDelnorte8PageModule {}
