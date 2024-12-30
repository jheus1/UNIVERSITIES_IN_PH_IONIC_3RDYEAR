import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosN6PageRoutingModule } from './ilocos-n6-routing.module';

import { IlocosN6Page } from './ilocos-n6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosN6PageRoutingModule
  ],
  declarations: [IlocosN6Page]
})
export class IlocosN6PageModule {}
