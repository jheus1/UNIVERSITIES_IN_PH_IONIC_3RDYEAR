import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosOv3PageRoutingModule } from './negros-ov3-routing.module';

import { NegrosOv3Page } from './negros-ov3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosOv3PageRoutingModule
  ],
  declarations: [NegrosOv3Page]
})
export class NegrosOv3PageModule {}
