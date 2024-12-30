import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cebu8PageRoutingModule } from './cebu8-routing.module';

import { Cebu8Page } from './cebu8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cebu8PageRoutingModule
  ],
  declarations: [Cebu8Page]
})
export class Cebu8PageModule {}
