import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosS5PageRoutingModule } from './ilocos-s5-routing.module';

import { IlocosS5Page } from './ilocos-s5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosS5PageRoutingModule
  ],
  declarations: [IlocosS5Page]
})
export class IlocosS5PageModule {}
