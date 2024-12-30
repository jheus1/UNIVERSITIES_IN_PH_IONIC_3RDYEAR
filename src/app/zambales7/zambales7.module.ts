import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zambales7PageRoutingModule } from './zambales7-routing.module';

import { Zambales7Page } from './zambales7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zambales7PageRoutingModule
  ],
  declarations: [Zambales7Page]
})
export class Zambales7PageModule {}
