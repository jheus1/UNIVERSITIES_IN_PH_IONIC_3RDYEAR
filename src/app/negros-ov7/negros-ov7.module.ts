import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosOv7PageRoutingModule } from './negros-ov7-routing.module';

import { NegrosOv7Page } from './negros-ov7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosOv7PageRoutingModule
  ],
  declarations: [NegrosOv7Page]
})
export class NegrosOv7PageModule {}
