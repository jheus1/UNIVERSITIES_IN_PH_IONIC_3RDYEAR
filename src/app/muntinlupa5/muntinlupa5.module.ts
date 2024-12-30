import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Muntinlupa5PageRoutingModule } from './muntinlupa5-routing.module';

import { Muntinlupa5Page } from './muntinlupa5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Muntinlupa5PageRoutingModule
  ],
  declarations: [Muntinlupa5Page]
})
export class Muntinlupa5PageModule {}
