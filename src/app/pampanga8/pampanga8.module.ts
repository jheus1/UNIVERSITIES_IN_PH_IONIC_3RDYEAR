import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pampanga8PageRoutingModule } from './pampanga8-routing.module';

import { Pampanga8Page } from './pampanga8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pampanga8PageRoutingModule
  ],
  declarations: [Pampanga8Page]
})
export class Pampanga8PageModule {}
