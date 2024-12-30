import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosOv9PageRoutingModule } from './negros-ov9-routing.module';

import { NegrosOv9Page } from './negros-ov9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosOv9PageRoutingModule
  ],
  declarations: [NegrosOv9Page]
})
export class NegrosOv9PageModule {}
