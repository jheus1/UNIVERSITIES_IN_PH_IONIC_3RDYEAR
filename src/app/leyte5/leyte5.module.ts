import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyte5PageRoutingModule } from './leyte5-routing.module';

import { Leyte5Page } from './leyte5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyte5PageRoutingModule
  ],
  declarations: [Leyte5Page]
})
export class Leyte5PageModule {}
