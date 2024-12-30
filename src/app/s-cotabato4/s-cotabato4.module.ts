import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCotabato4PageRoutingModule } from './s-cotabato4-routing.module';

import { SCotabato4Page } from './s-cotabato4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCotabato4PageRoutingModule
  ],
  declarations: [SCotabato4Page]
})
export class SCotabato4PageModule {}
