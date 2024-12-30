import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pampanga4PageRoutingModule } from './pampanga4-routing.module';

import { Pampanga4Page } from './pampanga4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pampanga4PageRoutingModule
  ],
  declarations: [Pampanga4Page]
})
export class Pampanga4PageModule {}
