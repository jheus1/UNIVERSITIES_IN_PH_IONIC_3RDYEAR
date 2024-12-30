import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pangasinan9PageRoutingModule } from './pangasinan9-routing.module';

import { Pangasinan9Page } from './pangasinan9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pangasinan9PageRoutingModule
  ],
  declarations: [Pangasinan9Page]
})
export class Pangasinan9PageModule {}
