import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zambales1PageRoutingModule } from './zambales1-routing.module';

import { Zambales1Page } from './zambales1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zambales1PageRoutingModule
  ],
  declarations: [Zambales1Page]
})
export class Zambales1PageModule {}
