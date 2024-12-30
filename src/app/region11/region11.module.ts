import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Region11PageRoutingModule } from './region11-routing.module';

import { Region11Page } from './region11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Region11PageRoutingModule
  ],
  declarations: [Region11Page]
})
export class Region11PageModule {}
