import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgusanDelsur4PageRoutingModule } from './agusan-delsur4-routing.module';

import { AgusanDelsur4Page } from './agusan-delsur4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgusanDelsur4PageRoutingModule
  ],
  declarations: [AgusanDelsur4Page]
})
export class AgusanDelsur4PageModule {}
