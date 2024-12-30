import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosOv5PageRoutingModule } from './negros-ov5-routing.module';

import { NegrosOv5Page } from './negros-ov5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosOv5PageRoutingModule
  ],
  declarations: [NegrosOv5Page]
})
export class NegrosOv5PageModule {}
