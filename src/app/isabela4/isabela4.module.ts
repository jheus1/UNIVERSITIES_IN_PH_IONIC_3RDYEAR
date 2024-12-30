import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Isabela4PageRoutingModule } from './isabela4-routing.module';

import { Isabela4Page } from './isabela4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Isabela4PageRoutingModule
  ],
  declarations: [Isabela4Page]
})
export class Isabela4PageModule {}
