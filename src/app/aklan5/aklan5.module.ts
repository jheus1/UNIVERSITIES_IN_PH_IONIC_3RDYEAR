import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aklan5PageRoutingModule } from './aklan5-routing.module';

import { Aklan5Page } from './aklan5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aklan5PageRoutingModule
  ],
  declarations: [Aklan5Page]
})
export class Aklan5PageModule {}
