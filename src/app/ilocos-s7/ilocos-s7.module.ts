import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosS7PageRoutingModule } from './ilocos-s7-routing.module';

import { IlocosS7Page } from './ilocos-s7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosS7PageRoutingModule
  ],
  declarations: [IlocosS7Page]
})
export class IlocosS7PageModule {}
