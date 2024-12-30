import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Isabela6PageRoutingModule } from './isabela6-routing.module';

import { Isabela6Page } from './isabela6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Isabela6PageRoutingModule
  ],
  declarations: [Isabela6Page]
})
export class Isabela6PageModule {}
