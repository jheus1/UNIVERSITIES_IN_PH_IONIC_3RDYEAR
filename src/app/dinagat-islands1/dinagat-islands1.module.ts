import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinagatIslands1PageRoutingModule } from './dinagat-islands1-routing.module';

import { DinagatIslands1Page } from './dinagat-islands1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinagatIslands1PageRoutingModule
  ],
  declarations: [DinagatIslands1Page]
})
export class DinagatIslands1PageModule {}
