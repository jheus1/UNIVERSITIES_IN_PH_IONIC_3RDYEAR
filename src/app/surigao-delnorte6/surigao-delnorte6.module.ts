import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelnorte6PageRoutingModule } from './surigao-delnorte6-routing.module';

import { SurigaoDelnorte6Page } from './surigao-delnorte6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelnorte6PageRoutingModule
  ],
  declarations: [SurigaoDelnorte6Page]
})
export class SurigaoDelnorte6PageModule {}
