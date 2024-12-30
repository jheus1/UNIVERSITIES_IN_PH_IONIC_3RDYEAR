import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iloilo3PageRoutingModule } from './iloilo3-routing.module';

import { Iloilo3Page } from './iloilo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Iloilo3PageRoutingModule
  ],
  declarations: [Iloilo3Page]
})
export class Iloilo3PageModule {}
