import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelsur9PageRoutingModule } from './davao-delsur9-routing.module';

import { DavaoDelsur9Page } from './davao-delsur9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelsur9PageRoutingModule
  ],
  declarations: [DavaoDelsur9Page]
})
export class DavaoDelsur9PageModule {}
