import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iloilo4PageRoutingModule } from './iloilo4-routing.module';

import { Iloilo4Page } from './iloilo4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Iloilo4PageRoutingModule
  ],
  declarations: [Iloilo4Page]
})
export class Iloilo4PageModule {}
