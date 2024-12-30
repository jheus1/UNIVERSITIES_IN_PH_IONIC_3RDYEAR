import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rizal6PageRoutingModule } from './rizal6-routing.module';

import { Rizal6Page } from './rizal6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rizal6PageRoutingModule
  ],
  declarations: [Rizal6Page]
})
export class Rizal6PageModule {}
