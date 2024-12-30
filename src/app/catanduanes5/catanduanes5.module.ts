import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Catanduanes5PageRoutingModule } from './catanduanes5-routing.module';

import { Catanduanes5Page } from './catanduanes5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Catanduanes5PageRoutingModule
  ],
  declarations: [Catanduanes5Page]
})
export class Catanduanes5PageModule {}
