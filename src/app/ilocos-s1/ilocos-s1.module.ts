import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosS1PageRoutingModule } from './ilocos-s1-routing.module';

import { IlocosS1Page } from './ilocos-s1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosS1PageRoutingModule
  ],
  declarations: [IlocosS1Page]
})
export class IlocosS1PageModule {}
