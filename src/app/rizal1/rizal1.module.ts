import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rizal1PageRoutingModule } from './rizal1-routing.module';

import { Rizal1Page } from './rizal1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rizal1PageRoutingModule
  ],
  declarations: [Rizal1Page]
})
export class Rizal1PageModule {}
