import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SultanKudarat10PageRoutingModule } from './sultan-kudarat10-routing.module';

import { SultanKudarat10Page } from './sultan-kudarat10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SultanKudarat10PageRoutingModule
  ],
  declarations: [SultanKudarat10Page]
})
export class SultanKudarat10PageModule {}
