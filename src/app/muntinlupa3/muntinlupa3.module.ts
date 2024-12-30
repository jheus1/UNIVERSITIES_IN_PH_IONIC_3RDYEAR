import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Muntinlupa3PageRoutingModule } from './muntinlupa3-routing.module';

import { Muntinlupa3Page } from './muntinlupa3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Muntinlupa3PageRoutingModule
  ],
  declarations: [Muntinlupa3Page]
})
export class Muntinlupa3PageModule {}
