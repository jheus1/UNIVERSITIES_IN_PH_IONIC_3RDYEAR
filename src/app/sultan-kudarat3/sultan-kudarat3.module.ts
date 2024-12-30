import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SultanKudarat3PageRoutingModule } from './sultan-kudarat3-routing.module';

import { SultanKudarat3Page } from './sultan-kudarat3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SultanKudarat3PageRoutingModule
  ],
  declarations: [SultanKudarat3Page]
})
export class SultanKudarat3PageModule {}
