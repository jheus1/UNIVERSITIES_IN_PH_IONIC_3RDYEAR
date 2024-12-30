import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pangasinan1PageRoutingModule } from './pangasinan1-routing.module';

import { Pangasinan1Page } from './pangasinan1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pangasinan1PageRoutingModule
  ],
  declarations: [Pangasinan1Page]
})
export class Pangasinan1PageModule {}
