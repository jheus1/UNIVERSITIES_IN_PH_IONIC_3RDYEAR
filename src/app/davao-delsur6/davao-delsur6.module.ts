import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelsur6PageRoutingModule } from './davao-delsur6-routing.module';

import { DavaoDelsur6Page } from './davao-delsur6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelsur6PageRoutingModule
  ],
  declarations: [DavaoDelsur6Page]
})
export class DavaoDelsur6PageModule {}
