import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bataan5PageRoutingModule } from './bataan5-routing.module';

import { Bataan5Page } from './bataan5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bataan5PageRoutingModule
  ],
  declarations: [Bataan5Page]
})
export class Bataan5PageModule {}
