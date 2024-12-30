import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosN9PageRoutingModule } from './ilocos-n9-routing.module';

import { IlocosN9Page } from './ilocos-n9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosN9PageRoutingModule
  ],
  declarations: [IlocosN9Page]
})
export class IlocosN9PageModule {}
