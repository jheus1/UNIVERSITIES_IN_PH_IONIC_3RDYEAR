import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaU6PageRoutingModule } from './la-u6-routing.module';

import { LaU6Page } from './la-u6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaU6PageRoutingModule
  ],
  declarations: [LaU6Page]
})
export class LaU6PageModule {}
