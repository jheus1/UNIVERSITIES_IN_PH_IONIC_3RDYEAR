import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SultanKudarat6PageRoutingModule } from './sultan-kudarat6-routing.module';

import { SultanKudarat6Page } from './sultan-kudarat6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SultanKudarat6PageRoutingModule
  ],
  declarations: [SultanKudarat6Page]
})
export class SultanKudarat6PageModule {}
