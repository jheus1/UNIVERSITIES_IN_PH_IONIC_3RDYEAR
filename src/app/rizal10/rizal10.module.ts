import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rizal10PageRoutingModule } from './rizal10-routing.module';

import { Rizal10Page } from './rizal10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rizal10PageRoutingModule
  ],
  declarations: [Rizal10Page]
})
export class Rizal10PageModule {}
