import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesS2PageRoutingModule } from './camarines-s2-routing.module';

import { CamarinesS2Page } from './camarines-s2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesS2PageRoutingModule
  ],
  declarations: [CamarinesS2Page]
})
export class CamarinesS2PageModule {}
