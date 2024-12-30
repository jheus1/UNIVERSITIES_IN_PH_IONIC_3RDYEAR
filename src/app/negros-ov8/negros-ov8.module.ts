import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosOv8PageRoutingModule } from './negros-ov8-routing.module';

import { NegrosOv8Page } from './negros-ov8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosOv8PageRoutingModule
  ],
  declarations: [NegrosOv8Page]
})
export class NegrosOv8PageModule {}
