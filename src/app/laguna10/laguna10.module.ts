import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Laguna10PageRoutingModule } from './laguna10-routing.module';

import { Laguna10Page } from './laguna10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Laguna10PageRoutingModule
  ],
  declarations: [Laguna10Page]
})
export class Laguna10PageModule {}
