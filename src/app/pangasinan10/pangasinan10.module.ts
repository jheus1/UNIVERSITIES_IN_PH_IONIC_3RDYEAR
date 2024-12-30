import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pangasinan10PageRoutingModule } from './pangasinan10-routing.module';

import { Pangasinan10Page } from './pangasinan10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pangasinan10PageRoutingModule
  ],
  declarations: [Pangasinan10Page]
})
export class Pangasinan10PageModule {}
