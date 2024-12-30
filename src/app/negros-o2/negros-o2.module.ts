import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosO2PageRoutingModule } from './negros-o2-routing.module';

import { NegrosO2Page } from './negros-o2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosO2PageRoutingModule
  ],
  declarations: [NegrosO2Page]
})
export class NegrosO2PageModule {}
