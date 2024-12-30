import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelsur5PageRoutingModule } from './davao-delsur5-routing.module';

import { DavaoDelsur5Page } from './davao-delsur5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelsur5PageRoutingModule
  ],
  declarations: [DavaoDelsur5Page]
})
export class DavaoDelsur5PageModule {}
