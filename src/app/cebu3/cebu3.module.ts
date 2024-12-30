import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cebu3PageRoutingModule } from './cebu3-routing.module';

import { Cebu3Page } from './cebu3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cebu3PageRoutingModule
  ],
  declarations: [Cebu3Page]
})
export class Cebu3PageModule {}
