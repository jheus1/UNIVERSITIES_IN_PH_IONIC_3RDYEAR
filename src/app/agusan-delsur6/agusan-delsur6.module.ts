import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgusanDelsur6PageRoutingModule } from './agusan-delsur6-routing.module';

import { AgusanDelsur6Page } from './agusan-delsur6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgusanDelsur6PageRoutingModule
  ],
  declarations: [AgusanDelsur6Page]
})
export class AgusanDelsur6PageModule {}
