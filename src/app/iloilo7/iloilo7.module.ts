import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iloilo7PageRoutingModule } from './iloilo7-routing.module';

import { Iloilo7Page } from './iloilo7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Iloilo7PageRoutingModule
  ],
  declarations: [Iloilo7Page]
})
export class Iloilo7PageModule {}
