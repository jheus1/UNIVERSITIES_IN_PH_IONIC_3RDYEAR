import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Isabela10PageRoutingModule } from './isabela10-routing.module';

import { Isabela10Page } from './isabela10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Isabela10PageRoutingModule
  ],
  declarations: [Isabela10Page]
})
export class Isabela10PageModule {}
