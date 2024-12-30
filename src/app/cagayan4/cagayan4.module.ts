import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cagayan4PageRoutingModule } from './cagayan4-routing.module';

import { Cagayan4Page } from './cagayan4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cagayan4PageRoutingModule
  ],
  declarations: [Cagayan4Page]
})
export class Cagayan4PageModule {}
