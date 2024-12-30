import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cagayan2PageRoutingModule } from './cagayan2-routing.module';

import { Cagayan2Page } from './cagayan2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cagayan2PageRoutingModule
  ],
  declarations: [Cagayan2Page]
})
export class Cagayan2PageModule {}
