import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Biliran9PageRoutingModule } from './biliran9-routing.module';

import { Biliran9Page } from './biliran9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Biliran9PageRoutingModule
  ],
  declarations: [Biliran9Page]
})
export class Biliran9PageModule {}
