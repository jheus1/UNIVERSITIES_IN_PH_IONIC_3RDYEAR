import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zambales9PageRoutingModule } from './zambales9-routing.module';

import { Zambales9Page } from './zambales9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zambales9PageRoutingModule
  ],
  declarations: [Zambales9Page]
})
export class Zambales9PageModule {}
