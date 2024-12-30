import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelsur3PageRoutingModule } from './davao-delsur3-routing.module';

import { DavaoDelsur3Page } from './davao-delsur3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelsur3PageRoutingModule
  ],
  declarations: [DavaoDelsur3Page]
})
export class DavaoDelsur3PageModule {}
