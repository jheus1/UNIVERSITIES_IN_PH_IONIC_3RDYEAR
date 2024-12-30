import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zambales8PageRoutingModule } from './zambales8-routing.module';

import { Zambales8Page } from './zambales8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zambales8PageRoutingModule
  ],
  declarations: [Zambales8Page]
})
export class Zambales8PageModule {}
