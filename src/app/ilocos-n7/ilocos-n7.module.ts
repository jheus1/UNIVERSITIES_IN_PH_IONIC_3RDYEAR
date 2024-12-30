import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosN7PageRoutingModule } from './ilocos-n7-routing.module';

import { IlocosN7Page } from './ilocos-n7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosN7PageRoutingModule
  ],
  declarations: [IlocosN7Page]
})
export class IlocosN7PageModule {}
