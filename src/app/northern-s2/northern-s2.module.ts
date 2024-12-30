import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthernS2PageRoutingModule } from './northern-s2-routing.module';

import { NorthernS2Page } from './northern-s2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthernS2PageRoutingModule
  ],
  declarations: [NorthernS2Page]
})
export class NorthernS2PageModule {}
