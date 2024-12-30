import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iloilo9PageRoutingModule } from './iloilo9-routing.module';

import { Iloilo9Page } from './iloilo9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Iloilo9PageRoutingModule
  ],
  declarations: [Iloilo9Page]
})
export class Iloilo9PageModule {}
