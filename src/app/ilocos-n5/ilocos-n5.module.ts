import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosN5PageRoutingModule } from './ilocos-n5-routing.module';

import { IlocosN5Page } from './ilocos-n5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosN5PageRoutingModule
  ],
  declarations: [IlocosN5Page]
})
export class IlocosN5PageModule {}
