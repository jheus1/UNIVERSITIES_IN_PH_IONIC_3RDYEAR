import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyte7PageRoutingModule } from './leyte7-routing.module';

import { Leyte7Page } from './leyte7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyte7PageRoutingModule
  ],
  declarations: [Leyte7Page]
})
export class Leyte7PageModule {}
