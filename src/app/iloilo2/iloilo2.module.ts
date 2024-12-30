import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iloilo2PageRoutingModule } from './iloilo2-routing.module';

import { Iloilo2Page } from './iloilo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Iloilo2PageRoutingModule
  ],
  declarations: [Iloilo2Page]
})
export class Iloilo2PageModule {}
