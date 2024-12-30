import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosS4PageRoutingModule } from './ilocos-s4-routing.module';

import { IlocosS4Page } from './ilocos-s4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosS4PageRoutingModule
  ],
  declarations: [IlocosS4Page]
})
export class IlocosS4PageModule {}
