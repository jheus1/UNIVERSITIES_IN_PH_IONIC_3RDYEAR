import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SultanKudaratPageRoutingModule } from './sultan-kudarat-routing.module';

import { SultanKudaratPage } from './sultan-kudarat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SultanKudaratPageRoutingModule
  ],
  declarations: [SultanKudaratPage]
})
export class SultanKudaratPageModule {}
