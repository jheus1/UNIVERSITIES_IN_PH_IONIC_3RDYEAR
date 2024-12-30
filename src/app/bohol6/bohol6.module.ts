import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bohol6PageRoutingModule } from './bohol6-routing.module';

import { Bohol6Page } from './bohol6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bohol6PageRoutingModule
  ],
  declarations: [Bohol6Page]
})
export class Bohol6PageModule {}
