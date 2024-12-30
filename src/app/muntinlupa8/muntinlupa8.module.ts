import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Muntinlupa8PageRoutingModule } from './muntinlupa8-routing.module';

import { Muntinlupa8Page } from './muntinlupa8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Muntinlupa8PageRoutingModule
  ],
  declarations: [Muntinlupa8Page]
})
export class Muntinlupa8PageModule {}
