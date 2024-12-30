import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelsur8PageRoutingModule } from './davao-delsur8-routing.module';

import { DavaoDelsur8Page } from './davao-delsur8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelsur8PageRoutingModule
  ],
  declarations: [DavaoDelsur8Page]
})
export class DavaoDelsur8PageModule {}
