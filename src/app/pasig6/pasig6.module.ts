import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasig6PageRoutingModule } from './pasig6-routing.module';

import { Pasig6Page } from './pasig6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasig6PageRoutingModule
  ],
  declarations: [Pasig6Page]
})
export class Pasig6PageModule {}
