import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgusanDelsur8PageRoutingModule } from './agusan-delsur8-routing.module';

import { AgusanDelsur8Page } from './agusan-delsur8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgusanDelsur8PageRoutingModule
  ],
  declarations: [AgusanDelsur8Page]
})
export class AgusanDelsur8PageModule {}
