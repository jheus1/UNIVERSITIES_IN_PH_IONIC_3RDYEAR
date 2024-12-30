import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelsur5PageRoutingModule } from './surigao-delsur5-routing.module';

import { SurigaoDelsur5Page } from './surigao-delsur5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelsur5PageRoutingModule
  ],
  declarations: [SurigaoDelsur5Page]
})
export class SurigaoDelsur5PageModule {}
