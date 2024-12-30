import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Region10PageRoutingModule } from './region10-routing.module';

import { Region10Page } from './region10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Region10PageRoutingModule
  ],
  declarations: [Region10Page]
})
export class Region10PageModule {}
