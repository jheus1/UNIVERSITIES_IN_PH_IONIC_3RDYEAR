import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SultanKudarat4PageRoutingModule } from './sultan-kudarat4-routing.module';

import { SultanKudarat4Page } from './sultan-kudarat4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SultanKudarat4PageRoutingModule
  ],
  declarations: [SultanKudarat4Page]
})
export class SultanKudarat4PageModule {}
