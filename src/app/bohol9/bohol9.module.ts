import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bohol9PageRoutingModule } from './bohol9-routing.module';

import { Bohol9Page } from './bohol9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bohol9PageRoutingModule
  ],
  declarations: [Bohol9Page]
})
export class Bohol9PageModule {}
