import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cebu1PageRoutingModule } from './cebu1-routing.module';

import { Cebu1Page } from './cebu1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cebu1PageRoutingModule
  ],
  declarations: [Cebu1Page]
})
export class Cebu1PageModule {}
