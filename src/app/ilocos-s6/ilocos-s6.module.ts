import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosS6PageRoutingModule } from './ilocos-s6-routing.module';

import { IlocosS6Page } from './ilocos-s6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosS6PageRoutingModule
  ],
  declarations: [IlocosS6Page]
})
export class IlocosS6PageModule {}
