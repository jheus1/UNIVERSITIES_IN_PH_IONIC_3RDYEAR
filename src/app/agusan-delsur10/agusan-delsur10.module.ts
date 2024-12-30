import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgusanDelsur10PageRoutingModule } from './agusan-delsur10-routing.module';

import { AgusanDelsur10Page } from './agusan-delsur10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgusanDelsur10PageRoutingModule
  ],
  declarations: [AgusanDelsur10Page]
})
export class AgusanDelsur10PageModule {}
