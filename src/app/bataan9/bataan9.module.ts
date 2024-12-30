import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bataan9PageRoutingModule } from './bataan9-routing.module';

import { Bataan9Page } from './bataan9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bataan9PageRoutingModule
  ],
  declarations: [Bataan9Page]
})
export class Bataan9PageModule {}
