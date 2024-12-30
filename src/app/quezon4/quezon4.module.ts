import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quezon4PageRoutingModule } from './quezon4-routing.module';

import { Quezon4Page } from './quezon4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quezon4PageRoutingModule
  ],
  declarations: [Quezon4Page]
})
export class Quezon4PageModule {}
