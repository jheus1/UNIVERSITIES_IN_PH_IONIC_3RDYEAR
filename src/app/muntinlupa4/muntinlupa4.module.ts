import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Muntinlupa4PageRoutingModule } from './muntinlupa4-routing.module';

import { Muntinlupa4Page } from './muntinlupa4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Muntinlupa4PageRoutingModule
  ],
  declarations: [Muntinlupa4Page]
})
export class Muntinlupa4PageModule {}
