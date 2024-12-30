import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sorsogon4PageRoutingModule } from './sorsogon4-routing.module';

import { Sorsogon4Page } from './sorsogon4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sorsogon4PageRoutingModule
  ],
  declarations: [Sorsogon4Page]
})
export class Sorsogon4PageModule {}
