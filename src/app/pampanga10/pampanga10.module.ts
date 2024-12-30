import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pampanga10PageRoutingModule } from './pampanga10-routing.module';

import { Pampanga10Page } from './pampanga10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pampanga10PageRoutingModule
  ],
  declarations: [Pampanga10Page]
})
export class Pampanga10PageModule {}
