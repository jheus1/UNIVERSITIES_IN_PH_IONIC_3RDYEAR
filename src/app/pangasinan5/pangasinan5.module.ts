import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pangasinan5PageRoutingModule } from './pangasinan5-routing.module';

import { Pangasinan5Page } from './pangasinan5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pangasinan5PageRoutingModule
  ],
  declarations: [Pangasinan5Page]
})
export class Pangasinan5PageModule {}
