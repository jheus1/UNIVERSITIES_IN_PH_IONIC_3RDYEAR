import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgusanDelsur9PageRoutingModule } from './agusan-delsur9-routing.module';

import { AgusanDelsur9Page } from './agusan-delsur9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgusanDelsur9PageRoutingModule
  ],
  declarations: [AgusanDelsur9Page]
})
export class AgusanDelsur9PageModule {}
