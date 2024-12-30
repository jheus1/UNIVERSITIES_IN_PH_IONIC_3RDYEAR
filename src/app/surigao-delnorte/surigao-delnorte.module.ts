import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelnortePageRoutingModule } from './surigao-delnorte-routing.module';

import { SurigaoDelnortePage } from './surigao-delnorte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelnortePageRoutingModule
  ],
  declarations: [SurigaoDelnortePage]
})
export class SurigaoDelnortePageModule {}
