import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bohol2PageRoutingModule } from './bohol2-routing.module';

import { Bohol2Page } from './bohol2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bohol2PageRoutingModule
  ],
  declarations: [Bohol2Page]
})
export class Bohol2PageModule {}
