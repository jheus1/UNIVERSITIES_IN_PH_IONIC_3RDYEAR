import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cagayan9PageRoutingModule } from './cagayan9-routing.module';

import { Cagayan9Page } from './cagayan9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cagayan9PageRoutingModule
  ],
  declarations: [Cagayan9Page]
})
export class Cagayan9PageModule {}
