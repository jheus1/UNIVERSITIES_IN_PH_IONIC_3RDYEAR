import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tarlac6PageRoutingModule } from './tarlac6-routing.module';

import { Tarlac6Page } from './tarlac6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tarlac6PageRoutingModule
  ],
  declarations: [Tarlac6Page]
})
export class Tarlac6PageModule {}
