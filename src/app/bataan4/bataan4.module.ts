import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bataan4PageRoutingModule } from './bataan4-routing.module';

import { Bataan4Page } from './bataan4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bataan4PageRoutingModule
  ],
  declarations: [Bataan4Page]
})
export class Bataan4PageModule {}
