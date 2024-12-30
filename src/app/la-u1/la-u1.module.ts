import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaU1PageRoutingModule } from './la-u1-routing.module';

import { LaU1Page } from './la-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaU1PageRoutingModule
  ],
  declarations: [LaU1Page]
})
export class LaU1PageModule {}
