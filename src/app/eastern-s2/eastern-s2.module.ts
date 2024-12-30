import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasternS2PageRoutingModule } from './eastern-s2-routing.module';

import { EasternS2Page } from './eastern-s2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasternS2PageRoutingModule
  ],
  declarations: [EasternS2Page]
})
export class EasternS2PageModule {}
