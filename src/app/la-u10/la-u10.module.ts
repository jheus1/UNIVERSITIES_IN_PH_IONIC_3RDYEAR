import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaU10PageRoutingModule } from './la-u10-routing.module';

import { LaU10Page } from './la-u10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaU10PageRoutingModule
  ],
  declarations: [LaU10Page]
})
export class LaU10PageModule {}
