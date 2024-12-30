import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinagatIslands9PageRoutingModule } from './dinagat-islands9-routing.module';

import { DinagatIslands9Page } from './dinagat-islands9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinagatIslands9PageRoutingModule
  ],
  declarations: [DinagatIslands9Page]
})
export class DinagatIslands9PageModule {}
