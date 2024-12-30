import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesS4PageRoutingModule } from './camarines-s4-routing.module';

import { CamarinesS4Page } from './camarines-s4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesS4PageRoutingModule
  ],
  declarations: [CamarinesS4Page]
})
export class CamarinesS4PageModule {}
