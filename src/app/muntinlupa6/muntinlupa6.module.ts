import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Muntinlupa6PageRoutingModule } from './muntinlupa6-routing.module';

import { Muntinlupa6Page } from './muntinlupa6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Muntinlupa6PageRoutingModule
  ],
  declarations: [Muntinlupa6Page]
})
export class Muntinlupa6PageModule {}
