import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Isabela2PageRoutingModule } from './isabela2-routing.module';

import { Isabela2Page } from './isabela2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Isabela2PageRoutingModule
  ],
  declarations: [Isabela2Page]
})
export class Isabela2PageModule {}
