import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosNPageRoutingModule } from './ilocos-n-routing.module';

import { IlocosNPage } from './ilocos-n.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosNPageRoutingModule
  ],
  declarations: [IlocosNPage]
})
export class IlocosNPageModule {}
