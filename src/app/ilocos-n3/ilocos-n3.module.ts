import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosN3PageRoutingModule } from './ilocos-n3-routing.module';

import { IlocosN3Page } from './ilocos-n3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosN3PageRoutingModule
  ],
  declarations: [IlocosN3Page]
})
export class IlocosN3PageModule {}
