import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesN4PageRoutingModule } from './camarines-n4-routing.module';

import { CamarinesN4Page } from './camarines-n4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesN4PageRoutingModule
  ],
  declarations: [CamarinesN4Page]
})
export class CamarinesN4PageModule {}
