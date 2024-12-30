import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesN2PageRoutingModule } from './camarines-n2-routing.module';

import { CamarinesN2Page } from './camarines-n2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesN2PageRoutingModule
  ],
  declarations: [CamarinesN2Page]
})
export class CamarinesN2PageModule {}
