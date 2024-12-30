import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cebu7PageRoutingModule } from './cebu7-routing.module';

import { Cebu7Page } from './cebu7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cebu7PageRoutingModule
  ],
  declarations: [Cebu7Page]
})
export class Cebu7PageModule {}
