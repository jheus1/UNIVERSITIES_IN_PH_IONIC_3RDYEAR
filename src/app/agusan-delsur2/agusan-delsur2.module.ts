import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgusanDelsur2PageRoutingModule } from './agusan-delsur2-routing.module';

import { AgusanDelsur2Page } from './agusan-delsur2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgusanDelsur2PageRoutingModule
  ],
  declarations: [AgusanDelsur2Page]
})
export class AgusanDelsur2PageModule {}
