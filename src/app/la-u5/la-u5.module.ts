import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaU5PageRoutingModule } from './la-u5-routing.module';

import { LaU5Page } from './la-u5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaU5PageRoutingModule
  ],
  declarations: [LaU5Page]
})
export class LaU5PageModule {}
