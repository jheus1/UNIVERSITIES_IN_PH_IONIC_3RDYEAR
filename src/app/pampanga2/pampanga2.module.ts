import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pampanga2PageRoutingModule } from './pampanga2-routing.module';

import { Pampanga2Page } from './pampanga2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pampanga2PageRoutingModule
  ],
  declarations: [Pampanga2Page]
})
export class Pampanga2PageModule {}
