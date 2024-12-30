import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Region12PageRoutingModule } from './region12-routing.module';

import { Region12Page } from './region12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Region12PageRoutingModule
  ],
  declarations: [Region12Page]
})
export class Region12PageModule {}
