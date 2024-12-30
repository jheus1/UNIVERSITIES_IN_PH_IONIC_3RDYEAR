import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgusanDelnorte1PageRoutingModule } from './agusan-delnorte1-routing.module';

import { AgusanDelnorte1Page } from './agusan-delnorte1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgusanDelnorte1PageRoutingModule
  ],
  declarations: [AgusanDelnorte1Page]
})
export class AgusanDelnorte1PageModule {}
