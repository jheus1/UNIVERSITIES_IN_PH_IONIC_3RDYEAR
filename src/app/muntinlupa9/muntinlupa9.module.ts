import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Muntinlupa9PageRoutingModule } from './muntinlupa9-routing.module';

import { Muntinlupa9Page } from './muntinlupa9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Muntinlupa9PageRoutingModule
  ],
  declarations: [Muntinlupa9Page]
})
export class Muntinlupa9PageModule {}
