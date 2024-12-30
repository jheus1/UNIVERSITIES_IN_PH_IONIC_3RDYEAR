import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bataan8PageRoutingModule } from './bataan8-routing.module';

import { Bataan8Page } from './bataan8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bataan8PageRoutingModule
  ],
  declarations: [Bataan8Page]
})
export class Bataan8PageModule {}
