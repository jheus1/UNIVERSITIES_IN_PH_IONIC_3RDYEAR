import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosN2PageRoutingModule } from './ilocos-n2-routing.module';

import { IlocosN2Page } from './ilocos-n2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosN2PageRoutingModule
  ],
  declarations: [IlocosN2Page]
})
export class IlocosN2PageModule {}
