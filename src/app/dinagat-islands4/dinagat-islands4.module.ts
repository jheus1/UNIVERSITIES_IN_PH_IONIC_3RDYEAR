import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinagatIslands4PageRoutingModule } from './dinagat-islands4-routing.module';

import { DinagatIslands4Page } from './dinagat-islands4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinagatIslands4PageRoutingModule
  ],
  declarations: [DinagatIslands4Page]
})
export class DinagatIslands4PageModule {}
