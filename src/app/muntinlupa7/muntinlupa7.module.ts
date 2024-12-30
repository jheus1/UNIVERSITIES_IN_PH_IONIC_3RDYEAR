import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Muntinlupa7PageRoutingModule } from './muntinlupa7-routing.module';

import { Muntinlupa7Page } from './muntinlupa7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Muntinlupa7PageRoutingModule
  ],
  declarations: [Muntinlupa7Page]
})
export class Muntinlupa7PageModule {}
