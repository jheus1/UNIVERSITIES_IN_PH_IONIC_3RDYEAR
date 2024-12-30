import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthernS4PageRoutingModule } from './northern-s4-routing.module';

import { NorthernS4Page } from './northern-s4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthernS4PageRoutingModule
  ],
  declarations: [NorthernS4Page]
})
export class NorthernS4PageModule {}
