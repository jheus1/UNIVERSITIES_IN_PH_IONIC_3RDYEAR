import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Biliran6PageRoutingModule } from './biliran6-routing.module';

import { Biliran6Page } from './biliran6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Biliran6PageRoutingModule
  ],
  declarations: [Biliran6Page]
})
export class Biliran6PageModule {}
