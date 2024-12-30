import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iloilo10PageRoutingModule } from './iloilo10-routing.module';

import { Iloilo10Page } from './iloilo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Iloilo10PageRoutingModule
  ],
  declarations: [Iloilo10Page]
})
export class Iloilo10PageModule {}
