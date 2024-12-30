import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SultanKudarat8PageRoutingModule } from './sultan-kudarat8-routing.module';

import { SultanKudarat8Page } from './sultan-kudarat8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SultanKudarat8PageRoutingModule
  ],
  declarations: [SultanKudarat8Page]
})
export class SultanKudarat8PageModule {}
