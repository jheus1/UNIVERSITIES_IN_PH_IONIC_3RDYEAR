import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cebu4PageRoutingModule } from './cebu4-routing.module';

import { Cebu4Page } from './cebu4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cebu4PageRoutingModule
  ],
  declarations: [Cebu4Page]
})
export class Cebu4PageModule {}
