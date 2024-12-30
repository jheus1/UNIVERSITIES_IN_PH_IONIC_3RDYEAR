import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelnorte4PageRoutingModule } from './surigao-delnorte4-routing.module';

import { SurigaoDelnorte4Page } from './surigao-delnorte4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelnorte4PageRoutingModule
  ],
  declarations: [SurigaoDelnorte4Page]
})
export class SurigaoDelnorte4PageModule {}
