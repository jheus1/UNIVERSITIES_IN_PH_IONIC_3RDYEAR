import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosS8PageRoutingModule } from './ilocos-s8-routing.module';

import { IlocosS8Page } from './ilocos-s8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosS8PageRoutingModule
  ],
  declarations: [IlocosS8Page]
})
export class IlocosS8PageModule {}
