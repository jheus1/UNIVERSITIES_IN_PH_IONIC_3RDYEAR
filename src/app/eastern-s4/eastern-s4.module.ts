import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasternS4PageRoutingModule } from './eastern-s4-routing.module';

import { EasternS4Page } from './eastern-s4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasternS4PageRoutingModule
  ],
  declarations: [EasternS4Page]
})
export class EasternS4PageModule {}
