import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Muntinlupa1PageRoutingModule } from './muntinlupa1-routing.module';

import { Muntinlupa1Page } from './muntinlupa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Muntinlupa1PageRoutingModule
  ],
  declarations: [Muntinlupa1Page]
})
export class Muntinlupa1PageModule {}
