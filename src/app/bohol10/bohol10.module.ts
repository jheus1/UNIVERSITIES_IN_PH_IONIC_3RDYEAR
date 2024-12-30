import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bohol10PageRoutingModule } from './bohol10-routing.module';

import { Bohol10Page } from './bohol10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bohol10PageRoutingModule
  ],
  declarations: [Bohol10Page]
})
export class Bohol10PageModule {}
