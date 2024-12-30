import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinagatIslands6PageRoutingModule } from './dinagat-islands6-routing.module';

import { DinagatIslands6Page } from './dinagat-islands6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinagatIslands6PageRoutingModule
  ],
  declarations: [DinagatIslands6Page]
})
export class DinagatIslands6PageModule {}
