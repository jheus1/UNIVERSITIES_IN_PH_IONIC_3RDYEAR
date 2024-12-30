import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Region7PageRoutingModule } from './region7-routing.module';

import { Region7Page } from './region7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Region7PageRoutingModule
  ],
  declarations: [Region7Page]
})
export class Region7PageModule {}
