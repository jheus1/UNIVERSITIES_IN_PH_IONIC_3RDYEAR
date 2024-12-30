import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pangasinan8PageRoutingModule } from './pangasinan8-routing.module';

import { Pangasinan8Page } from './pangasinan8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pangasinan8PageRoutingModule
  ],
  declarations: [Pangasinan8Page]
})
export class Pangasinan8PageModule {}
