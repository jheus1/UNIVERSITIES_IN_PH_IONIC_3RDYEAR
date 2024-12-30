import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosS2PageRoutingModule } from './ilocos-s2-routing.module';

import { IlocosS2Page } from './ilocos-s2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosS2PageRoutingModule
  ],
  declarations: [IlocosS2Page]
})
export class IlocosS2PageModule {}
