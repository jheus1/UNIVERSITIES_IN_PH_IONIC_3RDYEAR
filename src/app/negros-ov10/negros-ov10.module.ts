import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosOv10PageRoutingModule } from './negros-ov10-routing.module';

import { NegrosOv10Page } from './negros-ov10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosOv10PageRoutingModule
  ],
  declarations: [NegrosOv10Page]
})
export class NegrosOv10PageModule {}
