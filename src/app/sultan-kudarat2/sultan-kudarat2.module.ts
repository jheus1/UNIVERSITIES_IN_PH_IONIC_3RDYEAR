import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SultanKudarat2PageRoutingModule } from './sultan-kudarat2-routing.module';

import { SultanKudarat2Page } from './sultan-kudarat2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SultanKudarat2PageRoutingModule
  ],
  declarations: [SultanKudarat2Page]
})
export class SultanKudarat2PageModule {}
