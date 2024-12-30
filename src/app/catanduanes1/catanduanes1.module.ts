import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Catanduanes1PageRoutingModule } from './catanduanes1-routing.module';

import { Catanduanes1Page } from './catanduanes1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Catanduanes1PageRoutingModule
  ],
  declarations: [Catanduanes1Page]
})
export class Catanduanes1PageModule {}
