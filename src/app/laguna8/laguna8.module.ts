import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Laguna8PageRoutingModule } from './laguna8-routing.module';

import { Laguna8Page } from './laguna8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Laguna8PageRoutingModule
  ],
  declarations: [Laguna8Page]
})
export class Laguna8PageModule {}
