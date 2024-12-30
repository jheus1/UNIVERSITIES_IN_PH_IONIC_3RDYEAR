import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pangasinan6PageRoutingModule } from './pangasinan6-routing.module';

import { Pangasinan6Page } from './pangasinan6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pangasinan6PageRoutingModule
  ],
  declarations: [Pangasinan6Page]
})
export class Pangasinan6PageModule {}
