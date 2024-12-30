import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pampanga9PageRoutingModule } from './pampanga9-routing.module';

import { Pampanga9Page } from './pampanga9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pampanga9PageRoutingModule
  ],
  declarations: [Pampanga9Page]
})
export class Pampanga9PageModule {}
