import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bataan3PageRoutingModule } from './bataan3-routing.module';

import { Bataan3Page } from './bataan3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bataan3PageRoutingModule
  ],
  declarations: [Bataan3Page]
})
export class Bataan3PageModule {}
