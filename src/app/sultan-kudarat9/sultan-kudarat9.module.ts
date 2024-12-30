import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SultanKudarat9PageRoutingModule } from './sultan-kudarat9-routing.module';

import { SultanKudarat9Page } from './sultan-kudarat9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SultanKudarat9PageRoutingModule
  ],
  declarations: [SultanKudarat9Page]
})
export class SultanKudarat9PageModule {}
