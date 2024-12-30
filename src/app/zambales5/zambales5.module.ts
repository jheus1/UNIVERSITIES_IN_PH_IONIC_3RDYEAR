import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zambales5PageRoutingModule } from './zambales5-routing.module';

import { Zambales5Page } from './zambales5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zambales5PageRoutingModule
  ],
  declarations: [Zambales5Page]
})
export class Zambales5PageModule {}
