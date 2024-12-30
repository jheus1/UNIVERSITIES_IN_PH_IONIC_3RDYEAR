import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bohol8PageRoutingModule } from './bohol8-routing.module';

import { Bohol8Page } from './bohol8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bohol8PageRoutingModule
  ],
  declarations: [Bohol8Page]
})
export class Bohol8PageModule {}
