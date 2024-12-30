import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosN8PageRoutingModule } from './ilocos-n8-routing.module';

import { IlocosN8Page } from './ilocos-n8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosN8PageRoutingModule
  ],
  declarations: [IlocosN8Page]
})
export class IlocosN8PageModule {}
