import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosOv4PageRoutingModule } from './negros-ov4-routing.module';

import { NegrosOv4Page } from './negros-ov4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosOv4PageRoutingModule
  ],
  declarations: [NegrosOv4Page]
})
export class NegrosOv4PageModule {}
