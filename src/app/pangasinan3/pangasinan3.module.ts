import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pangasinan3PageRoutingModule } from './pangasinan3-routing.module';

import { Pangasinan3Page } from './pangasinan3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pangasinan3PageRoutingModule
  ],
  declarations: [Pangasinan3Page]
})
export class Pangasinan3PageModule {}
