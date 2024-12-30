import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pampanga6PageRoutingModule } from './pampanga6-routing.module';

import { Pampanga6Page } from './pampanga6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pampanga6PageRoutingModule
  ],
  declarations: [Pampanga6Page]
})
export class Pampanga6PageModule {}
