import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosOv2PageRoutingModule } from './negros-ov2-routing.module';

import { NegrosOv2Page } from './negros-ov2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosOv2PageRoutingModule
  ],
  declarations: [NegrosOv2Page]
})
export class NegrosOv2PageModule {}
