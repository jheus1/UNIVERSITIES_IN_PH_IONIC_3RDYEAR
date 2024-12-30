import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyte10PageRoutingModule } from './leyte10-routing.module';

import { Leyte10Page } from './leyte10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyte10PageRoutingModule
  ],
  declarations: [Leyte10Page]
})
export class Leyte10PageModule {}
