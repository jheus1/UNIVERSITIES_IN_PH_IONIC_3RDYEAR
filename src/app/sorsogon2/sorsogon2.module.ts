import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sorsogon2PageRoutingModule } from './sorsogon2-routing.module';

import { Sorsogon2Page } from './sorsogon2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sorsogon2PageRoutingModule
  ],
  declarations: [Sorsogon2Page]
})
export class Sorsogon2PageModule {}
