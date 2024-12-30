import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosN1PageRoutingModule } from './ilocos-n1-routing.module';

import { IlocosN1Page } from './ilocos-n1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosN1PageRoutingModule
  ],
  declarations: [IlocosN1Page]
})
export class IlocosN1PageModule {}
