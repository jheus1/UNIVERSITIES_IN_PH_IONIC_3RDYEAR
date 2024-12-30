import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasay6PageRoutingModule } from './pasay6-routing.module';

import { Pasay6Page } from './pasay6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasay6PageRoutingModule
  ],
  declarations: [Pasay6Page]
})
export class Pasay6PageModule {}
