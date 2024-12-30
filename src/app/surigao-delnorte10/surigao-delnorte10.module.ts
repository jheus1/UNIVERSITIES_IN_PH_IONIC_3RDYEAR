import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelnorte10PageRoutingModule } from './surigao-delnorte10-routing.module';

import { SurigaoDelnorte10Page } from './surigao-delnorte10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelnorte10PageRoutingModule
  ],
  declarations: [SurigaoDelnorte10Page]
})
export class SurigaoDelnorte10PageModule {}
