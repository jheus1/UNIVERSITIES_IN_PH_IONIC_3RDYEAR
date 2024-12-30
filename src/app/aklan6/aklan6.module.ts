import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aklan6PageRoutingModule } from './aklan6-routing.module';

import { Aklan6Page } from './aklan6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aklan6PageRoutingModule
  ],
  declarations: [Aklan6Page]
})
export class Aklan6PageModule {}
