import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SultanKudarat7PageRoutingModule } from './sultan-kudarat7-routing.module';

import { SultanKudarat7Page } from './sultan-kudarat7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SultanKudarat7PageRoutingModule
  ],
  declarations: [SultanKudarat7Page]
})
export class SultanKudarat7PageModule {}
