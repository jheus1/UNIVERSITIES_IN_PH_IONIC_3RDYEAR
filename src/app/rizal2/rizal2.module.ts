import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rizal2PageRoutingModule } from './rizal2-routing.module';

import { Rizal2Page } from './rizal2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rizal2PageRoutingModule
  ],
  declarations: [Rizal2Page]
})
export class Rizal2PageModule {}
