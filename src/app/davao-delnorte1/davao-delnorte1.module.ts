import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelnorte1PageRoutingModule } from './davao-delnorte1-routing.module';

import { DavaoDelnorte1Page } from './davao-delnorte1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelnorte1PageRoutingModule
  ],
  declarations: [DavaoDelnorte1Page]
})
export class DavaoDelnorte1PageModule {}
