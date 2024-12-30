import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Muntinlupa2PageRoutingModule } from './muntinlupa2-routing.module';

import { Muntinlupa2Page } from './muntinlupa2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Muntinlupa2PageRoutingModule
  ],
  declarations: [Muntinlupa2Page]
})
export class Muntinlupa2PageModule {}
