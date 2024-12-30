import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cavite5PageRoutingModule } from './cavite5-routing.module';

import { Cavite5Page } from './cavite5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cavite5PageRoutingModule
  ],
  declarations: [Cavite5Page]
})
export class Cavite5PageModule {}
