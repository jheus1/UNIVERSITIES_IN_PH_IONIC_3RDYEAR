import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cebu2PageRoutingModule } from './cebu2-routing.module';

import { Cebu2Page } from './cebu2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cebu2PageRoutingModule
  ],
  declarations: [Cebu2Page]
})
export class Cebu2PageModule {}
