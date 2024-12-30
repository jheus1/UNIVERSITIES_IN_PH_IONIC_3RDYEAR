import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosS10PageRoutingModule } from './ilocos-s10-routing.module';

import { IlocosS10Page } from './ilocos-s10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosS10PageRoutingModule
  ],
  declarations: [IlocosS10Page]
})
export class IlocosS10PageModule {}
