import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Region9PageRoutingModule } from './region9-routing.module';

import { Region9Page } from './region9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Region9PageRoutingModule
  ],
  declarations: [Region9Page]
})
export class Region9PageModule {}
