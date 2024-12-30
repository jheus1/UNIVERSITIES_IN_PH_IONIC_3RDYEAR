import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinagatIslands8PageRoutingModule } from './dinagat-islands8-routing.module';

import { DinagatIslands8Page } from './dinagat-islands8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinagatIslands8PageRoutingModule
  ],
  declarations: [DinagatIslands8Page]
})
export class DinagatIslands8PageModule {}
