import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Isabela9PageRoutingModule } from './isabela9-routing.module';

import { Isabela9Page } from './isabela9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Isabela9PageRoutingModule
  ],
  declarations: [Isabela9Page]
})
export class Isabela9PageModule {}
