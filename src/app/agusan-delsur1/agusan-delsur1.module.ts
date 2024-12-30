import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgusanDelsur1PageRoutingModule } from './agusan-delsur1-routing.module';

import { AgusanDelsur1Page } from './agusan-delsur1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgusanDelsur1PageRoutingModule
  ],
  declarations: [AgusanDelsur1Page]
})
export class AgusanDelsur1PageModule {}
