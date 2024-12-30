import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelsur7PageRoutingModule } from './davao-delsur7-routing.module';

import { DavaoDelsur7Page } from './davao-delsur7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelsur7PageRoutingModule
  ],
  declarations: [DavaoDelsur7Page]
})
export class DavaoDelsur7PageModule {}
