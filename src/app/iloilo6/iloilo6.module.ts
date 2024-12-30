import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iloilo6PageRoutingModule } from './iloilo6-routing.module';

import { Iloilo6Page } from './iloilo6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Iloilo6PageRoutingModule
  ],
  declarations: [Iloilo6Page]
})
export class Iloilo6PageModule {}
