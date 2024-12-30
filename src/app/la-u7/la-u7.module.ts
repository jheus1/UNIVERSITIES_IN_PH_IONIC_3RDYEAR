import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaU7PageRoutingModule } from './la-u7-routing.module';

import { LaU7Page } from './la-u7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaU7PageRoutingModule
  ],
  declarations: [LaU7Page]
})
export class LaU7PageModule {}
