import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bataan10PageRoutingModule } from './bataan10-routing.module';

import { Bataan10Page } from './bataan10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bataan10PageRoutingModule
  ],
  declarations: [Bataan10Page]
})
export class Bataan10PageModule {}
