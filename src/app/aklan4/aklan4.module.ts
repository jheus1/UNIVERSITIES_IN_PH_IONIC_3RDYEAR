import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aklan4PageRoutingModule } from './aklan4-routing.module';

import { Aklan4Page } from './aklan4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aklan4PageRoutingModule
  ],
  declarations: [Aklan4Page]
})
export class Aklan4PageModule {}
