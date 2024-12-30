import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pampanga5PageRoutingModule } from './pampanga5-routing.module';

import { Pampanga5Page } from './pampanga5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pampanga5PageRoutingModule
  ],
  declarations: [Pampanga5Page]
})
export class Pampanga5PageModule {}
