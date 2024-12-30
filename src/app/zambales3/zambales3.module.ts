import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zambales3PageRoutingModule } from './zambales3-routing.module';

import { Zambales3Page } from './zambales3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zambales3PageRoutingModule
  ],
  declarations: [Zambales3Page]
})
export class Zambales3PageModule {}
