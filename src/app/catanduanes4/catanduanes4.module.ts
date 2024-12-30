import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Catanduanes4PageRoutingModule } from './catanduanes4-routing.module';

import { Catanduanes4Page } from './catanduanes4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Catanduanes4PageRoutingModule
  ],
  declarations: [Catanduanes4Page]
})
export class Catanduanes4PageModule {}
