import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyte8PageRoutingModule } from './leyte8-routing.module';

import { Leyte8Page } from './leyte8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyte8PageRoutingModule
  ],
  declarations: [Leyte8Page]
})
export class Leyte8PageModule {}
