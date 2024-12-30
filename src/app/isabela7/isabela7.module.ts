import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Isabela7PageRoutingModule } from './isabela7-routing.module';

import { Isabela7Page } from './isabela7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Isabela7PageRoutingModule
  ],
  declarations: [Isabela7Page]
})
export class Isabela7PageModule {}
