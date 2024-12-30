import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinagatIslands3PageRoutingModule } from './dinagat-islands3-routing.module';

import { DinagatIslands3Page } from './dinagat-islands3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinagatIslands3PageRoutingModule
  ],
  declarations: [DinagatIslands3Page]
})
export class DinagatIslands3PageModule {}
