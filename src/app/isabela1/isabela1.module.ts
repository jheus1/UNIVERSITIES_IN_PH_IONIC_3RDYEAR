import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Isabela1PageRoutingModule } from './isabela1-routing.module';

import { Isabela1Page } from './isabela1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Isabela1PageRoutingModule
  ],
  declarations: [Isabela1Page]
})
export class Isabela1PageModule {}
