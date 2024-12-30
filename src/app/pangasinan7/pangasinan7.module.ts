import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pangasinan7PageRoutingModule } from './pangasinan7-routing.module';

import { Pangasinan7Page } from './pangasinan7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pangasinan7PageRoutingModule
  ],
  declarations: [Pangasinan7Page]
})
export class Pangasinan7PageModule {}
