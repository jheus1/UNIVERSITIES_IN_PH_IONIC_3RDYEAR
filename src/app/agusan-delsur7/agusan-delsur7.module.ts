import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgusanDelsur7PageRoutingModule } from './agusan-delsur7-routing.module';

import { AgusanDelsur7Page } from './agusan-delsur7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgusanDelsur7PageRoutingModule
  ],
  declarations: [AgusanDelsur7Page]
})
export class AgusanDelsur7PageModule {}
