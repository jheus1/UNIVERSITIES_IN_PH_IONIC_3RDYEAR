import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pangasinan2PageRoutingModule } from './pangasinan2-routing.module';

import { Pangasinan2Page } from './pangasinan2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pangasinan2PageRoutingModule
  ],
  declarations: [Pangasinan2Page]
})
export class Pangasinan2PageModule {}
