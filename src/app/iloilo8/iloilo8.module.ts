import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iloilo8PageRoutingModule } from './iloilo8-routing.module';

import { Iloilo8Page } from './iloilo8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Iloilo8PageRoutingModule
  ],
  declarations: [Iloilo8Page]
})
export class Iloilo8PageModule {}
