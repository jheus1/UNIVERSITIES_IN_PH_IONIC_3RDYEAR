import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cagayan7PageRoutingModule } from './cagayan7-routing.module';

import { Cagayan7Page } from './cagayan7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cagayan7PageRoutingModule
  ],
  declarations: [Cagayan7Page]
})
export class Cagayan7PageModule {}
