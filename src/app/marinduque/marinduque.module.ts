import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarinduquePageRoutingModule } from './marinduque-routing.module';

import { MarinduquePage } from './marinduque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarinduquePageRoutingModule
  ],
  declarations: [MarinduquePage]
})
export class MarinduquePageModule {}
