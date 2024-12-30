import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Muntinlupa10PageRoutingModule } from './muntinlupa10-routing.module';

import { Muntinlupa10Page } from './muntinlupa10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Muntinlupa10PageRoutingModule
  ],
  declarations: [Muntinlupa10Page]
})
export class Muntinlupa10PageModule {}
