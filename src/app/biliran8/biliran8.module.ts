import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Biliran8PageRoutingModule } from './biliran8-routing.module';

import { Biliran8Page } from './biliran8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Biliran8PageRoutingModule
  ],
  declarations: [Biliran8Page]
})
export class Biliran8PageModule {}
