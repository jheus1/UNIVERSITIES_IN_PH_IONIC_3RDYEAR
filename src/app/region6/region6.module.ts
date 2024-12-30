import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Region6PageRoutingModule } from './region6-routing.module';

import { Region6Page } from './region6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Region6PageRoutingModule
  ],
  declarations: [Region6Page]
})
export class Region6PageModule {}
