import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelnorte7PageRoutingModule } from './surigao-delnorte7-routing.module';

import { SurigaoDelnorte7Page } from './surigao-delnorte7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelnorte7PageRoutingModule
  ],
  declarations: [SurigaoDelnorte7Page]
})
export class SurigaoDelnorte7PageModule {}
