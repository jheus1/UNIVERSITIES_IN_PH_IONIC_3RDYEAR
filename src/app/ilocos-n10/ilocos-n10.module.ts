import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosN10PageRoutingModule } from './ilocos-n10-routing.module';

import { IlocosN10Page } from './ilocos-n10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosN10PageRoutingModule
  ],
  declarations: [IlocosN10Page]
})
export class IlocosN10PageModule {}
