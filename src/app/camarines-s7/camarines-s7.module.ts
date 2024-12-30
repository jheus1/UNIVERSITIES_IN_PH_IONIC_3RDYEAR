import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesS7PageRoutingModule } from './camarines-s7-routing.module';

import { CamarinesS7Page } from './camarines-s7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesS7PageRoutingModule
  ],
  declarations: [CamarinesS7Page]
})
export class CamarinesS7PageModule {}
