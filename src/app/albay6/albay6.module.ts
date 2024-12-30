import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Albay6PageRoutingModule } from './albay6-routing.module';

import { Albay6Page } from './albay6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Albay6PageRoutingModule
  ],
  declarations: [Albay6Page]
})
export class Albay6PageModule {}
