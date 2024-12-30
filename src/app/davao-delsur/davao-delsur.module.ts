import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelsurPageRoutingModule } from './davao-delsur-routing.module';

import { DavaoDelsurPage } from './davao-delsur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelsurPageRoutingModule
  ],
  declarations: [DavaoDelsurPage]
})
export class DavaoDelsurPageModule {}
