import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cagayan8PageRoutingModule } from './cagayan8-routing.module';

import { Cagayan8Page } from './cagayan8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cagayan8PageRoutingModule
  ],
  declarations: [Cagayan8Page]
})
export class Cagayan8PageModule {}
