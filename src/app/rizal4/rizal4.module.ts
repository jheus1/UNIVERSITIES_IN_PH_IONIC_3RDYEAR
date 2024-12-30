import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rizal4PageRoutingModule } from './rizal4-routing.module';

import { Rizal4Page } from './rizal4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rizal4PageRoutingModule
  ],
  declarations: [Rizal4Page]
})
export class Rizal4PageModule {}
