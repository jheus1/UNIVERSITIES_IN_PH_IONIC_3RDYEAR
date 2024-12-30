import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cagayan6PageRoutingModule } from './cagayan6-routing.module';

import { Cagayan6Page } from './cagayan6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cagayan6PageRoutingModule
  ],
  declarations: [Cagayan6Page]
})
export class Cagayan6PageModule {}
