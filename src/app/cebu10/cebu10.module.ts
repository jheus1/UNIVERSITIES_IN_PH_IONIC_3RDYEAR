import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cebu10PageRoutingModule } from './cebu10-routing.module';

import { Cebu10Page } from './cebu10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cebu10PageRoutingModule
  ],
  declarations: [Cebu10Page]
})
export class Cebu10PageModule {}
