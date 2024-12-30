import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Antique8PageRoutingModule } from './antique8-routing.module';

import { Antique8Page } from './antique8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Antique8PageRoutingModule
  ],
  declarations: [Antique8Page]
})
export class Antique8PageModule {}
