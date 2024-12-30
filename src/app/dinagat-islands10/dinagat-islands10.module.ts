import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinagatIslands10PageRoutingModule } from './dinagat-islands10-routing.module';

import { DinagatIslands10Page } from './dinagat-islands10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinagatIslands10PageRoutingModule
  ],
  declarations: [DinagatIslands10Page]
})
export class DinagatIslands10PageModule {}
