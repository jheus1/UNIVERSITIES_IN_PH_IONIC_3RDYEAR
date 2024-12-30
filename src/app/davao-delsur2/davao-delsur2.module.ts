import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelsur2PageRoutingModule } from './davao-delsur2-routing.module';

import { DavaoDelsur2Page } from './davao-delsur2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelsur2PageRoutingModule
  ],
  declarations: [DavaoDelsur2Page]
})
export class DavaoDelsur2PageModule {}
