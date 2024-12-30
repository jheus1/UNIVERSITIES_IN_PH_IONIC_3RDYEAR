import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosOv1PageRoutingModule } from './negros-ov1-routing.module';

import { NegrosOv1Page } from './negros-ov1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosOv1PageRoutingModule
  ],
  declarations: [NegrosOv1Page]
})
export class NegrosOv1PageModule {}
