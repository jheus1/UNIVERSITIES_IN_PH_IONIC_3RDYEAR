import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosN4PageRoutingModule } from './ilocos-n4-routing.module';

import { IlocosN4Page } from './ilocos-n4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosN4PageRoutingModule
  ],
  declarations: [IlocosN4Page]
})
export class IlocosN4PageModule {}
