import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Catanduanes2PageRoutingModule } from './catanduanes2-routing.module';

import { Catanduanes2Page } from './catanduanes2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Catanduanes2PageRoutingModule
  ],
  declarations: [Catanduanes2Page]
})
export class Catanduanes2PageModule {}
