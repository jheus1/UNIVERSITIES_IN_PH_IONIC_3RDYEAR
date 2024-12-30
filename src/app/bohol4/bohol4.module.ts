import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bohol4PageRoutingModule } from './bohol4-routing.module';

import { Bohol4Page } from './bohol4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bohol4PageRoutingModule
  ],
  declarations: [Bohol4Page]
})
export class Bohol4PageModule {}
