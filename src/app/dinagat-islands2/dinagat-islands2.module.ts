import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinagatIslands2PageRoutingModule } from './dinagat-islands2-routing.module';

import { DinagatIslands2Page } from './dinagat-islands2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinagatIslands2PageRoutingModule
  ],
  declarations: [DinagatIslands2Page]
})
export class DinagatIslands2PageModule {}
