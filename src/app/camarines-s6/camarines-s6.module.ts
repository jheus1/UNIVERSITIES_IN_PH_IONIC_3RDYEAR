import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesS6PageRoutingModule } from './camarines-s6-routing.module';

import { CamarinesS6Page } from './camarines-s6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesS6PageRoutingModule
  ],
  declarations: [CamarinesS6Page]
})
export class CamarinesS6PageModule {}
