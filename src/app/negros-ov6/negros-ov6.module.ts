import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosOv6PageRoutingModule } from './negros-ov6-routing.module';

import { NegrosOv6Page } from './negros-ov6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosOv6PageRoutingModule
  ],
  declarations: [NegrosOv6Page]
})
export class NegrosOv6PageModule {}
