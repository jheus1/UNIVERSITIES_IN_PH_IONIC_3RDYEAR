import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Catanduanes3PageRoutingModule } from './catanduanes3-routing.module';

import { Catanduanes3Page } from './catanduanes3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Catanduanes3PageRoutingModule
  ],
  declarations: [Catanduanes3Page]
})
export class Catanduanes3PageModule {}
