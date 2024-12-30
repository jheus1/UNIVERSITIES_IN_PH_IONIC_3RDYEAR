import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelnorte2PageRoutingModule } from './davao-delnorte2-routing.module';

import { DavaoDelnorte2Page } from './davao-delnorte2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelnorte2PageRoutingModule
  ],
  declarations: [DavaoDelnorte2Page]
})
export class DavaoDelnorte2PageModule {}
