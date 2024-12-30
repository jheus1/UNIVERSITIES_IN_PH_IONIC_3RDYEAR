import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelsur1PageRoutingModule } from './davao-delsur1-routing.module';

import { DavaoDelsur1Page } from './davao-delsur1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelsur1PageRoutingModule
  ],
  declarations: [DavaoDelsur1Page]
})
export class DavaoDelsur1PageModule {}
