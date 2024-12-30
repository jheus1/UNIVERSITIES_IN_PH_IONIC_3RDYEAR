import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SultanKudarat1PageRoutingModule } from './sultan-kudarat1-routing.module';

import { SultanKudarat1Page } from './sultan-kudarat1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SultanKudarat1PageRoutingModule
  ],
  declarations: [SultanKudarat1Page]
})
export class SultanKudarat1PageModule {}
