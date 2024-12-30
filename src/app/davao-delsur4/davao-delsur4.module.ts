import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelsur4PageRoutingModule } from './davao-delsur4-routing.module';

import { DavaoDelsur4Page } from './davao-delsur4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelsur4PageRoutingModule
  ],
  declarations: [DavaoDelsur4Page]
})
export class DavaoDelsur4PageModule {}
