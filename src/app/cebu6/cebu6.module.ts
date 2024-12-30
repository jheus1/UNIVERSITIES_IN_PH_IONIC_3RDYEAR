import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cebu6PageRoutingModule } from './cebu6-routing.module';

import { Cebu6Page } from './cebu6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cebu6PageRoutingModule
  ],
  declarations: [Cebu6Page]
})
export class Cebu6PageModule {}
