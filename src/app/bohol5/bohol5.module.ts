import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bohol5PageRoutingModule } from './bohol5-routing.module';

import { Bohol5Page } from './bohol5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bohol5PageRoutingModule
  ],
  declarations: [Bohol5Page]
})
export class Bohol5PageModule {}
