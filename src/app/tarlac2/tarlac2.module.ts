import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tarlac2PageRoutingModule } from './tarlac2-routing.module';

import { Tarlac2Page } from './tarlac2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tarlac2PageRoutingModule
  ],
  declarations: [Tarlac2Page]
})
export class Tarlac2PageModule {}
