import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Laguna7PageRoutingModule } from './laguna7-routing.module';

import { Laguna7Page } from './laguna7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Laguna7PageRoutingModule
  ],
  declarations: [Laguna7Page]
})
export class Laguna7PageModule {}
