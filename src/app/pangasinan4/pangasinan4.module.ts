import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pangasinan4PageRoutingModule } from './pangasinan4-routing.module';

import { Pangasinan4Page } from './pangasinan4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pangasinan4PageRoutingModule
  ],
  declarations: [Pangasinan4Page]
})
export class Pangasinan4PageModule {}
