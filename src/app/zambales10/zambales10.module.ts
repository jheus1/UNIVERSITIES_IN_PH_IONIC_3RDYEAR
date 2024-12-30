import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zambales10PageRoutingModule } from './zambales10-routing.module';

import { Zambales10Page } from './zambales10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zambales10PageRoutingModule
  ],
  declarations: [Zambales10Page]
})
export class Zambales10PageModule {}
