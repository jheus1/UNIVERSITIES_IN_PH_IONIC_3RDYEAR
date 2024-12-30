import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgusanDelsur3PageRoutingModule } from './agusan-delsur3-routing.module';

import { AgusanDelsur3Page } from './agusan-delsur3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgusanDelsur3PageRoutingModule
  ],
  declarations: [AgusanDelsur3Page]
})
export class AgusanDelsur3PageModule {}
