import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosS9PageRoutingModule } from './ilocos-s9-routing.module';

import { IlocosS9Page } from './ilocos-s9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosS9PageRoutingModule
  ],
  declarations: [IlocosS9Page]
})
export class IlocosS9PageModule {}
