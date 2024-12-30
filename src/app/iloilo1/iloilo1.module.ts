import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iloilo1PageRoutingModule } from './iloilo1-routing.module';

import { Iloilo1Page } from './iloilo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Iloilo1PageRoutingModule
  ],
  declarations: [Iloilo1Page]
})
export class Iloilo1PageModule {}
