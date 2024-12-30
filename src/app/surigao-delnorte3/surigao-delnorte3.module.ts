import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelnorte3PageRoutingModule } from './surigao-delnorte3-routing.module';

import { SurigaoDelnorte3Page } from './surigao-delnorte3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelnorte3PageRoutingModule
  ],
  declarations: [SurigaoDelnorte3Page]
})
export class SurigaoDelnorte3PageModule {}
