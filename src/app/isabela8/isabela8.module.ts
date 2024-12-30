import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Isabela8PageRoutingModule } from './isabela8-routing.module';

import { Isabela8Page } from './isabela8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Isabela8PageRoutingModule
  ],
  declarations: [Isabela8Page]
})
export class Isabela8PageModule {}
