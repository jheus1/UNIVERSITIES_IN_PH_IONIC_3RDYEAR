import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaU4PageRoutingModule } from './la-u4-routing.module';

import { LaU4Page } from './la-u4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaU4PageRoutingModule
  ],
  declarations: [LaU4Page]
})
export class LaU4PageModule {}
