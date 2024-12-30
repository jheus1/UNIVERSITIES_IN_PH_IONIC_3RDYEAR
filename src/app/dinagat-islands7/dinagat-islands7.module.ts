import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinagatIslands7PageRoutingModule } from './dinagat-islands7-routing.module';

import { DinagatIslands7Page } from './dinagat-islands7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinagatIslands7PageRoutingModule
  ],
  declarations: [DinagatIslands7Page]
})
export class DinagatIslands7PageModule {}
