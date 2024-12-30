import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaU2PageRoutingModule } from './la-u2-routing.module';

import { LaU2Page } from './la-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaU2PageRoutingModule
  ],
  declarations: [LaU2Page]
})
export class LaU2PageModule {}
