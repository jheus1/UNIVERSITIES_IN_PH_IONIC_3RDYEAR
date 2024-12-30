import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cebu9PageRoutingModule } from './cebu9-routing.module';

import { Cebu9Page } from './cebu9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cebu9PageRoutingModule
  ],
  declarations: [Cebu9Page]
})
export class Cebu9PageModule {}
