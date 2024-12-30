import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyte9PageRoutingModule } from './leyte9-routing.module';

import { Leyte9Page } from './leyte9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyte9PageRoutingModule
  ],
  declarations: [Leyte9Page]
})
export class Leyte9PageModule {}
