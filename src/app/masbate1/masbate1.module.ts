import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Masbate1PageRoutingModule } from './masbate1-routing.module';

import { Masbate1Page } from './masbate1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Masbate1PageRoutingModule
  ],
  declarations: [Masbate1Page]
})
export class Masbate1PageModule {}
