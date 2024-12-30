import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOriental5PageRoutingModule } from './misamis-oriental5-routing.module';

import { MisamisOriental5Page } from './misamis-oriental5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOriental5PageRoutingModule
  ],
  declarations: [MisamisOriental5Page]
})
export class MisamisOriental5PageModule {}
